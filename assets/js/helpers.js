var TOTAL = 0
var TOTALBONUS = 0

function generateDownloads(downloads) {
    var labels = [];
    var nDownloads = [];
    var total = 0;
    for (let i = 0; i < downloads.length; i++) {
      var obj = downloads[i]
      var monthDate = moment(obj['date']);
      TOTAL = TOTAL + obj['$ae_first_open'];
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
        },
      ],
    };
  }
 function generateIdps(idps) {
    var labels = [];
    var poste = [];
    var cie = [];
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
      cie.push(obj['CIE']);
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
          label: "Poste",
          data: poste,
          borderWidth: 0,
          backgroundColor: "#f8d515",
        },{
          label: "Cie",
          data: cie,
          borderWidth: 0,
          backgroundColor: "#15c5f8",
        },{
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
          label: "Register",
          data: register,
          borderWidth: 0,
          backgroundColor: "#f6ede6",
        },{
          label: "Sielte",
          data: sielte,
          borderWidth: 0,
          backgroundColor: "#287c4a",
        },{
          label: "Telecom",
          data: telecom,
          borderWidth: 0,
          backgroundColor: "#d90d2e",
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
      TOTALBONUS = TOTALBONUS + obj['total'];
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
          borderWidth: 1,
          backgroundColor: "rgb(0, 115, 230, 0.2)",
          borderColor: "rgb(0, 115, 230)",
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