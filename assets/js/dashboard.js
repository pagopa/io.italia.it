function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open(
      "GET",
      "https://publicdashboard.blob.core.windows.net/public/dashboard-io.json",
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
    console.log(dashboardData);

    var totalPred = document.getElementById("totalPred") ? document.getElementById("totalPred").getContext("2d") : undefined;
    var downloads = generateDownloads(dashboardData.downloads.slice(65,dashboardData.downloads.length));
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
        title: {
          display: false,
          text: "Numero donwloads ",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                fontSize: 15,
                fontColor: "#19191a",
                fontFamily: "'Titillium Web', Arial",
              },
              type: 'time',
              unitStepSize: 5,
            },      
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                display: false,
                fontSize: 15,
                fontColor: "#19191a",
                fontFamily: "'Titillium Web', Arial",
                maxTicksLimit: 5,
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
      },
    }) : undefined;

    var idps = document.getElementById("idps") ? document.getElementById("idps").getContext("2d") : undefined;
    var idpsData = generateIdps(dashboardData.idps.slice(65,dashboardData.idps.length ));
    var idpsChart = idps ? new Chart(idps, {
      type: "bar",
      data: idpsData,
      options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        responsive: true,
        title: {
          display: true,
          text: "Login ",
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
              },
              ticks: {
                fontSize: 15,
                fontColor: "#19191a",
                fontFamily: "'Titillium Web', Arial",
              },
              type: 'time',
              unitStepSize: 5,
            },      
          ],
          yAxes: [		
            {
              stacked: true,
              gridLines: {
                display: true,
              },
              ticks: {
                display: false,
                fontSize: 15,
                fontColor: "#19191a",
                fontFamily: "'Titillium Web', Arial",
                maxTicksLimit: 5,
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
        responsive: true,
        title: {
          display: false,
          text: "Bonus Vacanze ",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                fontSize: 15,
                fontColor: "#19191a",
                fontFamily: "'Titillium Web', Arial",
              },
              type: 'time',
              unitStepSize: 5,
            },      
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                display: false,
                fontSize: 15,
                fontColor: "#19191a",
                fontFamily: "'Titillium Web', Arial",
                maxTicksLimit: 5,
              },
            },
          ],
        },
      },
    }) : undefined;

    $("#downloads").text( TOTAL.toLocaleString("it"));
    $("#bonusTotal").text( TOTALBONUS.toLocaleString("it"));

  });
  