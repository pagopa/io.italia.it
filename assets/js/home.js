var INFOURL = "/assets/json/enti-list-numbers.json";

$(window).on("load", function() {
    $enti = $("#home-enti-num");
    $services = $("#home-servizi-num");
    $.get( INFOURL, function( data ) {
        $enti.text(data.enti);
        $services.text(data.services);
      }, "json")
      .fail(function() {
        $enti.parent().parent().remove();
      });
});
