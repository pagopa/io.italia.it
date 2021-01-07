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

function tooltipLabelCallbackYNumber(tooltipItem) {
  return formatNumberIntl(tooltipItem.yLabel);
}

function tooltipLabelCallbackArcNumber(tooltipItem, data) {
  var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
  return formatNumberIntl(value);
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
      all.push(obj['Poste ID'] + obj['Aruba ID'] + obj['Aruba ID'] + obj['Namirial ID'] + obj['Infocert ID']
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

  function generatePieCashback(cashback) {
    
    var data = [0,0]
    for (var i = 0; i < cashback.length; i++) {
      var obj = cashback[i]
      data[0] = data[0] + obj['io']
      data[1] = data[1] + obj['others']
    }

    return {
      labels: ['IO', 'Altri'],
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

  function generateAderenti(aderenti) {
    var labels = [];
    var users = [];
    for (let i = 0; i < aderenti.length; i++) {
      var obj = aderenti[i]
      var monthDate = moment(obj['day']);
      // TOTALBONUS = TOTALBONUS + obj['total'];
      const date = monthDate.format("YYYY-MM-DD");
      labels.push(date.toString());
      users.push(obj['total']);
    }
    return {
      labels,
      datasets: [
        {
          label: "Utenti aderenti",
          data: users,
          borderWidth: 2,
          backgroundColor: "rgb(0, 115, 230, 0.2)",
          borderColor: "rgb(0, 115, 230)",
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

  function generateCarteOnboard(carteOnboard) {
    var labels = [];
    var cards = [];
    for (let i = 0; i < carteOnboard.length; i++) {
      var obj = carteOnboard[i]
      var monthDate = moment(obj['day']);
      // TOTALBONUS = TOTALBONUS + obj['total'];
      const date = monthDate.format("YYYY-MM-DD");
      labels.push(date.toString());
      cards.push(obj['tot']);
    }
    return {
      labels,
      datasets: [
        {
          label: "Numero carte",
          data: cards,
          borderWidth: 2,
          backgroundColor: "rgb(0, 115, 230, 0.2)",
          borderColor: "rgb(0, 115, 230)",
          pointHitRadius: 5,
          pointRadius: 0
        },
      ],
    };
  }

  function generateUserTrx(raw) {
    var clean = raw.filter(function(d) { return d.bin <= 150 })
    var labels = clean.map(function (d, i) { return clean[i + 1] ? [d.bin, clean[i + 1].bin].join('-') : '+' + d.bin });
    var data = clean.map(function (d) { return d.count });
    return {
      labels,
      datasets: [
        {
          label: "Numero utenti",
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

  function generateUserCashback(raw) {
    var labels = raw.map(function (d, i) { return [raw[i - 1] ? raw[i - 1].bin : 0, d.bin].join('-') + '€' });
    var data = raw.map(function(d) { return d.count });
    return {
      labels,
      datasets: [
        {
          label: "Numero utenti",
          data: data,
          borderWidth: 2,
          backgroundColor: "rgb(0, 115, 230, 0.2)",
          borderColor: "rgb(0, 115, 230)",
          pointHitRadius: 5,
          pointRadius: 0
        },
      ],
    };
  }
