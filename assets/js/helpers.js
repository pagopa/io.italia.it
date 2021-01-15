var TOTAL = 0
var TOTALBONUS = 0

function formatNumberIntl(n) {
  return new Intl.NumberFormat().format(n);
}
function formatNumberSuffix(n) {
  var ranges = [
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'k' }
  ];

  for (var i = 0; i < ranges.length; i++) {
    if (n >= ranges[i].divider) {
      var formattedDivider = formatNumberIntl(n / ranges[i].divider);
      return formattedDivider + ranges[i].suffix;
    }
  }
  return n;
}

function tooltipTitleCallbackXDate(tooltipItem) {
  return new Date(tooltipItem[0].xLabel).toLocaleDateString();
}

function tooltipLabelCallbackYNumber(tooltipItem, data) {
  var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
  return dataLabel + ": " + formatNumberIntl(tooltipItem.yLabel);
}

function tooltipLabelCallbackArcNumber(tooltipItem, data) {
  var dataLabel = data.labels[tooltipItem.index];
  var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
  return dataLabel + ": " + formatNumberIntl(value);
}

function generateDownloads(downloads) {
    var labels = [];
    var nDownloads = [];
    downloadsFromJune = downloads.slice(65,downloads.length)
    for (let i = 0; i < downloads.length; i++) {
      var obj = downloads[i]
      TOTAL = TOTAL + obj['$ae_first_open'];
    }
    for (let i = 0; i < downloadsFromJune.length; i++) {
      var obj = downloadsFromJune[i]
      var monthDate = moment(obj['date']);
      const date = monthDate.format("YYYY-MM-DD");
      labels.push(date.toString());
      nDownloads.push(obj['$ae_first_open']);
    }
    return {
      labels,
      datasets: [
        {
          label: "# Downloads IO",
          data: nDownloads,
          borderWidth: 2,
          backgroundColor: "rgb(0, 115, 230, 0.2)",
          borderColor: "rgb(0, 115, 230)",
          pointRadius: 0,
          pointBorderColor: "rgb(0, 115, 230)",
          pointBackgroundColor: "rgb(0, 115, 230)",
          pointHitRadius: 5,
        },
      ],
    };
  }
 function generateIdps(idps) {
    var labels = [];
    var poste = [];
    // var cie = [];
    var aruba = [];
    var namiral = [];
    var infocert = [];
    var intesa = []
    var lepida = []
    var register = []
    var sielte = []
    var telecom = []
    var total = 0;
    for (let i = 0; i < idps.length; i++) {
      var obj = idps[i]
      var monthDate = moment(obj['date']);
      const date = monthDate.format("YYYY-MM-DD");
      labels.push(date.toString());
      poste.push(obj['Poste ID']);
      aruba.push(obj['Aruba ID']);
      namiral.push(obj['Namirial ID'])
      infocert.push(obj['Infocert ID'])
      intesa.push(obj['Intesa ID'])
      lepida.push(obj['Lepida ID'])
      register.push(obj['SPIDItalia Register.it'])
      sielte.push(obj['Sielte ID'])
      telecom.push(obj['Telecom Italia'])
    }
    return {
      labels,
      datasets: [
        {
          label: "Poste Italiane",
          data: poste,
          borderWidth: 0,
          backgroundColor: "#f8d515",
        },
        {
          label: "Aruba",
          data: aruba,
          borderWidth: 0,
          backgroundColor: "green",
        },{
          label: "Namiral",
          data: namiral,
          borderWidth: 0,
          backgroundColor: "#e9ab74",
        },{
          label: "Infocert",
          data: infocert,
          borderWidth: 0,
          backgroundColor: "#3374a1",
        },{
          label: "Intesa",
          data: intesa,
          borderWidth: 0,
          backgroundColor: "#afd724",
        },
        {
          label: "Lepida",
          data: lepida,
          borderWidth: 0,
          backgroundColor: "#e4771f",
        },
        {
          label: "Register.it",
          data: register,
          borderWidth: 0,
          backgroundColor: "#f6ede6",
        },{
          label: "Sielte",
          data: sielte,
          borderWidth: 0,
          backgroundColor: "#287c4a",
        },{
          label: "TIM",
          data: telecom,
          borderWidth: 0,
          backgroundColor: "#d90d2e",
        },
      ],
    };
  }
  function generateCieIdps(idps) {
    var labels = [];
    var all = [];
    var cie = [];
    var total = 0;
    for (let i = 0; i < idps.length; i++) {
      var obj = idps[i]
      var monthDate = moment(obj['date']);
      const date = monthDate.format("YYYY-MM-DD");
      labels.push(date.toString());
      all.push(obj['Poste ID'] + obj['Aruba ID'] + obj['Namirial ID'] + obj['Infocert ID']
         + obj['Intesa ID'] + obj['Lepida ID'] + obj['SPIDItalia Register.it'] + obj['Sielte ID'] + obj['Telecom Italia']);
      cie.push(obj['CIE']);
    }
    return {
      labels,
      datasets: [
        {
          label: "SPID",
          data: all,
          borderWidth: 0,
          backgroundColor: "#3374a1",
        },{
          label: "CIE",
          data: cie,
          borderWidth: 0,
          backgroundColor: "#15c5f8",
        },
      ],
    };
  }

  function generateBonus(bonusActivation) {
    var labels = [];
    var bonus = [];
    for (let i = 0; i < bonusActivation.length; i++) {
      var obj = bonusActivation[i]
      var monthDate = moment(obj['date']);
      // TOTALBONUS = TOTALBONUS + obj['total'];
      const date = monthDate.format("YYYY-MM-DD");
      labels.push(date.toString());
      bonus.push(obj['total']);
    }
    return {
      labels,
      datasets: [
        {
          label: "Bonus Vacanze",
          data: bonus,
          borderWidth: 2,
          backgroundColor: "rgb(0, 115, 230, 0.2)",
          borderColor: "rgb(0, 115, 230)",
          pointHitRadius: 5,
          pointRadius: 0
        },
      ],
    };
  }

  function generatePieOS(os) {
    
    var data = [0,0]
    for (var i = 0; i < os.length; i++) {
      var obj = os[i]
      data[0] = data[0] + obj['Android']
      data[1] = data[1] + obj['iOS']
    }

    return {
      labels: ['Android', 'iOS'],
      datasets: [
        {
          data: data,
          backgroundColor: ["rgb(0, 115, 230)","rgb(38, 200, 247)"],
          hoverBackgroundColor: [
            "rgb(0, 90, 200)","rgb(10, 160, 220)"
          ],
          hoverBorderColor: '#fff',
        },
      ],
    };
  }

  function generateUserTrxThreshold(below, above, threshold) {
    var data = [below, above]
    return {
      labels: ["tra 1 e " + (threshold - 1), threshold + " e più"],
      datasets: [
        {
          data: data,
          backgroundColor: ["rgb(38, 200, 247)", "#fff"],
          hoverBackgroundColor: ["rgb(10, 160, 220)"],
          borderColor: "#2d489d",
          hoverBorderColor: "#2d489d",
        },
      ],
    };
  }

  function generateAderenti(aderenti, carte) {
    var labels = [];
    var users = [];
    var cards = [];
    for (let i = 0; i < aderenti.length; i++) {
      var obj = aderenti[i]
      var monthDate = moment(obj['day']);
      // TOTALBONUS = TOTALBONUS + obj['total'];
      const date = monthDate.format("YYYY-MM-DD");
      labels.push(date.toString());
      users.push(obj['total']);
      const cardsFound = carte.find(function (d) { return d.day === obj.day });
      cards.push(cardsFound && cardsFound.tot);
    }
    return {
      labels,
      datasets: [
        {
          label: "Utenti aderenti",
          data: users,
          backgroundColor: "rgb(0, 115, 230)",
          pointHitRadius: 5,
          pointRadius: 0
        },
        {
          label: "Strumenti di pagamento",
          data: cards,
          backgroundColor: "#15c5f8",
          pointHitRadius: 5,
          pointRadius: 0
        },
      ],
    };
  }

  function generateTrxDay(trx) {
    var labels = [];
    var transactions = [];
    for (let i = 0; i < trx.length; i++) {
      var obj = trx[i]
      var monthDate = moment(obj['day']);
      // TOTALBONUS = TOTALBONUS + obj['total'];
      const date = monthDate.format("YYYY-MM-DD");
      labels.push(date.toString());
      transactions.push(obj['count']);
    }
    return {
      labels,
      datasets: [
        {
          label: "Numero transazioni",
          data: transactions,
          borderWidth: 2,
          backgroundColor: "rgb(0, 115, 230, 0.2)",
          borderColor: "rgb(0, 115, 230)",
          pointHitRadius: 5,
          pointRadius: 0
        },
      ],
    };
  }

  function generateTrxAmount(raw) {
    var labelsSorted = ["< 5", "5-10", "10-25", "25-50", "50-150", "150-300", "> 300"];
    var clean = raw.sort(function (a, b) { return labelsSorted.indexOf(a.ran) - labelsSorted.indexOf(b.ran) });
    var labels = clean.map(function (d) { return d.ran + '€' });
    var data = clean.map(function (d) { return d["count(*)"] });
    return {
      labels,
      datasets: [
        {
          label: "Numero transazioni",
          data: data,
          borderWidth: 2,
          backgroundColor: "rgb(0, 115, 230)",
          borderColor: "rgb(0, 115, 230)",
          pointHitRadius: 5,
          pointRadius: 0
        },
      ],
    };
  }

  function generateUserTrx(raw, threshold) {
    var clean = raw.filter(function(d) { return d.bin <= 150 })
    var labels = clean.map(function (d, i) {
      var next = clean[i + 1];
      return next ? [d.bin || 1, next.bin - 1].join('-') : '+' + d.bin;
    });
    var backgroundColors = raw.map(function(d) { return d.bin >= threshold ? 'rgb(0, 115, 230)' : '#15c5f8' })
    var data = clean.map(function (d) { return d.count });
    return {
      labels,
      datasets: [
        {
          label: "Numero utenti",
          data: data,
          backgroundColor: backgroundColors,
          pointHitRadius: 5,
          pointRadius: 0
        },
      ],
    };
  }
