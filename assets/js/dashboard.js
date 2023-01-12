$(function () {
  $.getJSON("https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/dashboard-io.json", function (dashboardData) {
    var totalDownloads = (dashboardData.downloads || []).reduce(function (r, c) {
      return r += c.$ae_first_open;
    }, 0);

    $("#downloads").text(totalDownloads.toLocaleString("it"));
  });

  $.getJSON("https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/dashboard-io-archive.json", function (dashboardArchiveData) {
    $("#bonusTotal").text(dashboardArchiveData.generatedBonusCount.toLocaleString("it"));
    $("#bonusAmount").text(dashboardArchiveData.generatedBonusAmount.toLocaleString("it") + " €");
  });
});
