var INFOURL = "https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/dashboard-io.json";

$(window).on("load", function() {
    $enti = $("#home-enti-num");
    $services = $("#home-servizi-num");
    $.get( INFOURL, function( data ) {
        $enti.text(data.enti_total && data.enti_total.toLocaleString("it"));
        $services.text(data.services_total && data.services_total.toLocaleString("it"));
      }, "json")
      .fail(function() {
        $enti.parent().parent().remove();
      });
});
