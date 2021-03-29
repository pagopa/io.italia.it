$(function() {
    var enti = ".entiList__item";
    var $filters = $(".entiList__scopefilter a");

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
    })
});
