$(function() {
    var enti = ".entiList__item";
    var $enti = $(enti);
    var $noresults = $("#entiSearch__noresults");
    var $loading = $("#entiSearch__loading");
    var $entisearchReset = $("#entiSearchReset");
    var $filters = $(".entiList__scopefilter a");
    var $entiSearchInput = $("#entiSearchInput");
    var jsonEntiUrl = "/assets/json/enti-list-searchable.json";
    var searchableList = [];
    var urlHash = window.location.hash;
    var entiTypeMap = {
        "#nazionali": "NATIONAL",
        "#locali": "LOCAL"
    }

    $.ajax({
        url: jsonEntiUrl,
        dataType: 'json',
        success: function(data,textStatus,xhr) {
            searchableList = data;
        }
    });

    function delay(callback, ms) {
        var timer = 0;
        return function() {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            callback.apply(context, args);
          }, ms || 0);
        };
      }

    function search(stringSearched) {
        var resultsFC = [];
        results = searchableList.filter(function(entry) {
            if ( entry.indexOf(stringSearched.toUpperCase()) !== -1) {
                resultsFC.push(entry.split("|")[1]);
                return true;
            } else {
                return false;
            }
        });
        $enti.each( function(index) {
            var $ente = $(this);
            var visibility = false;
            if (resultsFC.includes( $ente.attr('id'))) {
                $ente.fadeIn(600);
                if (!visibility) {
                    visibility = true;
                    $loading.addClass("invisible");
                }
            }

        });
        if (results.length < 1) {
            $loading.addClass("invisible");
            $noresults.removeClass("d-none");
        }
    }

    $entisearchReset.on("click", function(e) {
        e.preventDefault();
        $enti.show();
        $noresults.addClass("d-none");
        $entiSearchInput.val("");
        $entiSearchInput.focus();
        $entisearchReset.addClass("invisible");
    })

    $filters.on("click", function(e) {
        e.preventDefault();
        var scope = $(this).data("scopeSelector");
        if (scope!=="") {
            $(enti+"."+scope).removeClass("d-none");
            $(enti+":not(."+scope+")").addClass("d-none");
        } else {
            $(enti).removeClass("d-none");
        }
        $filters.removeClass("active");
        $(this).addClass("active");
    });

    $entiSearchInput.on("focus", function() {
        $filters.first().trigger("click");
    });

    $entiSearchInput.on("keyup", delay(function(e) {
        e.preventDefault();
        var value = this.value;
        if (value.length < 3) {
            $enti.fadeIn();
            return false;
        }
        $loading.removeClass("invisible");
        $entisearchReset.removeClass("invisible");
        $enti.hide();
        search(value);
    },1000));

    if (urlHash!="") {
        var $filterBtn = $filters.filter('[data-scope-selector="'+ entiTypeMap[urlHash] +'"]');
        $filterBtn.trigger("click");
    }
});
