function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open(
      "GET",
      "https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/dashboard-io.json",
      true
    ); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  //function init() {
  loadJSON(function (response) {
    // Parse JSON string into object
    var dashboardData = JSON.parse(response);

    var totalPred = document.getElementById("totalPred") ? document.getElementById("totalPred").getContext("2d") : undefined;
    var downloads = generateDownloads(dashboardData.downloads);
    var predChart = totalPred ? new Chart(totalPred, {
      type: "line",
      data: downloads,
      options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: "Numero donwloads ",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 15,
                fontColor: "#5C6F82",
                fontFamily: "'Titillium Web', Arial",
              },
              type: 'time',
              time: {
                stepSize: 7,
              }
            },      
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                display: true,
                fontSize: 12,
                fontColor: "#5C6F82",
                fontFamily: "'Titillium Web', Arial",
                maxTicksLimit: 5,
                callback: function(value) {
                  var ranges = [
                     { divider: 1e6, suffix: 'M' },
                     { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                     for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                           return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                     }
                     return n;
                  }
                  return formatNumber(value);
               }
              },
            },
          ],
        },
      },
    }) : undefined;

    var dataForEdcPie = generatePieOS(dashboardData.downloadsByOs);
    var top10PEdcPieElem = document.getElementById("top10EdcPie") ? document.getElementById("top10EdcPie").getContext("2d") : undefined;
    var top10PEdcPie = top10PEdcPieElem ? new Chart(top10PEdcPieElem, {
      type: "pie",
      data: dataForEdcPie,
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
          labels : {
            boxWidth: 8,
            usePointStyle: true,
            fontFamily: "'Titillium Web', Arial",

          }
        }
      },
    }) : undefined;

    var idps = document.getElementById("idps") ? document.getElementById("idps").getContext("2d") : undefined;
    var idpsData = generateIdps(dashboardData.idps.slice(65,dashboardData.idps.length));
    var idpsChart = idps ? new Chart(idps, {
      type: "bar",
      data: idpsData,
      borderWidth: 0,
      options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 0,
          },
        },
        responsive: true,
        title: {
          display: false,
          text: "Login ",
        },
        legend: {
          position: 'bottom',
          labels : {
            boxWidth: 8,
            usePointStyle: true,
            fontFamily: "'Titillium Web', Arial",

          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 15,
                fontColor: "#5C6F82",
                fontFamily: "'Titillium Web', Arial",
              },
              type: 'time',
              time: {
                stepSize: 7,
              }
            },      
          ],
          yAxes: [		
            {
              stacked: true,
              gridLines: {
                display: true,
              },
              ticks: {
                display: true,
                fontSize: 12,
                fontColor: "#5C6F82",
                fontFamily: "'Titillium Web', Arial",
                maxTicksLimit: 5,
                callback: function(value) {
                  var ranges = [
                     { divider: 1e6, suffix: 'M' },
                     { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                     for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                           return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                     }
                     return n;
                  }
                  return formatNumber(value);
               }
              },
            },
          ],
        },
      },
    }) : undefined;

    var cieVsIdps = document.getElementById("cieidps") ? document.getElementById("cieidps").getContext("2d") : undefined;
    var cieIdpsData = generateCieIdps(dashboardData.idps.slice(65,dashboardData.idps.length ));
    var cieIdpsChart = cieVsIdps ? new Chart(cieVsIdps, {
      type: "bar",
      data: cieIdpsData,
      borderWidth: 0,
      options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 0,
          },
        },
        responsive: true,
        title: {
          display: false,
          text: "Login ",
        },
        legend: {
          position: 'bottom',
          labels : {
            boxWidth: 8,
            usePointStyle: true,
            fontFamily: "'Titillium Web', Arial",

          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 15,
                fontColor: "#5C6F82",
                fontFamily: "'Titillium Web', Arial",
              },
              type: 'time',
              time: {
                stepSize: 7,
              }
            },      
          ],
          yAxes: [		
            {
              stacked: true,
              gridLines: {
                display: true,
              },
              ticks: {
                display: true,
                fontSize: 12,
                fontColor: "#5C6F82",
                fontFamily: "'Titillium Web', Arial",
                maxTicksLimit: 5,
                callback: function(value) {
                  var ranges = [
                     { divider: 1e6, suffix: 'M' },
                     { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                     for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                           return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                     }
                     return n;
                  }
                  return formatNumber(value);
               }
              },
            },
          ],
        },
      },
    }) : undefined;

    var bonusLine = document.getElementById("bonusLine") ? document.getElementById("bonusLine").getContext("2d") : undefined;
    var bonus = generateBonus(dashboardData.bonusActivation);
    var predChart = bonusLine ? new Chart(bonusLine, {
      type: "line",
      data: bonus,
      options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        legend: {
          display: false,
        },
        responsive: true,
        title: {
          display: false,
          text: "Bonus Vacanze ",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 15,
                fontColor: "#5C6F82",
                fontFamily: "'Titillium Web', Arial",
              },
              type: 'time',
              time: {
                stepSize: 7,
              }
            },      
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                display: true,
                fontSize: 12,
                fontColor: "#5C6F82",
                fontFamily: "'Titillium Web', Arial",
                maxTicksLimit: 5,
                callback: function(value) {
                  var ranges = [
                     { divider: 1e6, suffix: 'M' },
                     { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                     for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                           return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                     }
                     return n;
                  }
                  return formatNumber(value);
               }
              },
            },
          ],
        },
      },
    }) : undefined;

    $("#downloads").text( TOTAL.toLocaleString("it"));
    $("#bonusTotal").text( dashboardData.generatedBonusCount.toLocaleString("it"));
    $("#bonusAmount").text( dashboardData.generatedBonusAmount.toLocaleString("it") + " €");
    $("#numbonusredeem").text( dashboardData.redeemedBonusCount.toLocaleString("it"));
    $("#today").text( moment().format("DD/MM/YYYY") );
  });
  