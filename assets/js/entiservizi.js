var IMGREPO = "https://assets.cdn.io.italia.it/logos/organizations/";
var ENTISERVIZIJSON = "/assets/json/enti-list-webview.json";

function lazyload() {
        var lazyloadElements;
        if ("IntersectionObserver" in window) {
          lazyloadElements = document.querySelectorAll(".lazy");
          var elObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                var lazyel = entry.target;
                var img = lazyel.querySelector("img");
                var imgname = img.getAttribute("data-src");
                imgname = imgname.replace(/^0+/, "");
                img.setAttribute("src", IMGREPO + imgname);
                lazyel.classList.remove("lazy");
                elObserver.unobserve(lazyel);
                img.classList.add("show");
              }
            });
          });

          lazyloadElements.forEach(function(lazyel) {
            elObserver.observe(lazyel);
          });
        } else {
          lazyloadElements = document.querySelectorAll(".lazy");
          lazyloadElements.forEach(function(entry) {
              entry.classList.remove("lazy");
              var img = entry.querySelector("img");
              var imgname = img.getAttribute("data-src");
              imgname = imgname.replace(/^0+/, "");
              img.setAttribute("src", IMGREPO + imgname);
              img.classList.add("show");
          });
        }
}

function sendMessagesToRN(serviceId) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(serviceId);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var searchstringEl = document.getElementById("entiservizi__searchstring");
    var searchform = document.getElementById("entiservizi__search");
    var searchedstringEl = document.getElementById("entiservizi__searched");
    var searchSubmitButton = document.getElementById("entiservizi__submit");
    var searchedstringDoneEl = document.querySelector(".entiservizi__search__done");
    var searchResetEl = document.getElementById("entiservizi__searchreset");
    var searchformTip = document.querySelector(".entiservizi__search__tip");
    var searchformSearchingMessage = document.querySelector(".entiservizi__searching");
    var searchformNoResults = document.querySelector(".entiservizi__noresults");
    var itemList = document.querySelector(".entiservizi__list");
    var connectionProblem = document.querySelector(".entiservizi__problem");
    var resultdata = [];
    var resultdata_searchable = [];

    Handlebars.registerHelper('setImgSrc', function(value){
        var imgname = value.replace(/^0+/, "");
        return IMGREPO + imgname + ".png";
      });
    Handlebars.registerHelper('serviceName', function(value){
        return value.slice(0, -1);
      });
    Handlebars.registerHelper('serviceQuality', function(value, options){
        return value.slice(-1)=="0" ? options.fn(this) : options.inverse(this);
      });

    function constructSearchable(service, index) {
        var orgName = service.o.toUpperCase();
        var servicesArray = service.s.length > 0 ? service.s : [];
        var servicesNormalized = servicesArray.map(function(item){
            return Object.keys(item).map(function(singlek) {
                return item[singlek].toUpperCase();
            })
        });
        resultdata_searchable.push( index.toString() + "|" + orgName + "|" + servicesNormalized.join() );
    }

    function loadSearch() {
        searchformSearchingMessage.classList.remove("active");
    }

    function search() {
        searchformNoResults.classList.remove("active");
        var searchstring = searchstringEl.value.trim();
        var results;

        results = resultdata_searchable.filter(function(entry) {
            if ( entry.indexOf(searchstring.toUpperCase()) !== -1) {
                return true;
            } else {
                return false;
            }
        });

        searchedstringEl.innerText = searchstring;
        searchedstringDoneEl.classList.add("active");
        window.scrollTo(0, 0);
        if (results.length > 0) {
            var items = document.getElementsByClassName("entiservizi__item");
            var results_ids = results.map(function(item) {
                return item.split("|")[0];
            });
            Array.prototype.forEach.call(items, function(item, i){
                if (results_ids.indexOf(item.getAttribute("data-index")) >= 0) {
                    item.classList.remove("d-none");
                } else {
                    item.classList.add("d-none");
                }
            });
            itemList.classList.remove("d-none");
        } else {
            searchformNoResults.classList.add("active");
            itemList.classList.add("d-none");
        }
        searchformSearchingMessage.classList.remove("active");
    }


    searchstringEl.addEventListener("focus", function(e) {
        searchform.classList.add("onfocus");
    });
    searchstringEl.addEventListener("focusout", function(e) {
        searchform.classList.remove("onfocus");
    });

    searchResetEl.addEventListener("click", function(e) {
        e.preventDefault();
        var items = document.querySelectorAll(".entiservizi__item.d-none");

        searchedstringDoneEl.classList.remove("active");
        window.scrollTo(0, 0);
        searchstringEl.value = "";
        Array.prototype.forEach.call(items, function(item, i){
            item.classList.remove("d-none");
        });
        itemList.classList.remove("d-none");
        searchformNoResults.classList.remove("active");
    });

    searchform.addEventListener("submit", function(e) {
        itemList.classList.add("d-none");
        searchformSearchingMessage.classList.add("active");
        searchedstringDoneEl.classList.remove("active");
        e.preventDefault();
        searchSubmitButton.focus();
        setTimeout(search, 2000);
    });

    function createList(data) {
        var source = document.getElementById("entiservizi-template").innerHTML;
        var template = Handlebars.compile(source);
        data.forEach(function(service, index) {
            constructSearchable(service, index);
            var el = document.createElement("div");
            el.classList.add("entiservizi__item");
            el.setAttribute("data-index", index);
            if (index > 30) {
                el.classList.add("lazy");
            } else {
                service['nolazy'] = true;
            }
            var html = template(service);
            el.innerHTML = html;
            itemList.appendChild(el);
        });
        lazyload();
    }

    var request = new XMLHttpRequest();
    request.open("GET", ENTISERVIZIJSON, true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            document.body.classList.remove("loading");
            resultdata = JSON.parse(this.response);
            createList(resultdata);
        } else {
            document.body.classList.remove("loading");
            connectionProblem.classList.add("active");
        }
    };

    request.onerror = function() {
        document.body.classList.remove("loading");
        connectionProblem.classList.add("active");
    };

    request.send();
});