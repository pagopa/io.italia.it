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
          borderWidth: 1,
          backgroundColor: "#f8d515",
          borderColor: "rgb(0, 115, 230)",
        },{
          label: "Cie",
          data: cie,
          borderWidth: 1,
          backgroundColor: "#15c5f8",
          borderColor: "rgb(0, 115, 230)",
        },{
          label: "Aruba",
          data: aruba,
          borderWidth: 1,
          backgroundColor: "green",
          borderColor: "rgb(0, 115, 230)",
        },{
          label: "Namiral",
          data: namiral,
          borderWidth: 1,
          backgroundColor: "#e9ab74",
          borderColor: "rgb(0, 115, 230)",
        },{
          label: "Infocert",
          data: infocert,
          borderWidth: 1,
          backgroundColor: "#3374a1",
          borderColor: "rgb(0, 115, 230)",
        },{
          label: "Intesa",
          data: intesa,
          borderWidth: 1,
          backgroundColor: "#afd724",
          borderColor: "rgb(0, 115, 230)",
        },
        {
          label: "Lepida",
          data: lepida,
          borderWidth: 1,
          backgroundColor: "#e4771f",
          borderColor: "rgb(0, 115, 230)",
        },
        {
          label: "Register",
          data: register,
          borderWidth: 1,
          backgroundColor: "#f6ede6",
          borderColor: "rgb(0, 115, 230)",
        },{
          label: "Sielte",
          data: sielte,
          borderWidth: 1,
          backgroundColor: "#287c4a",
          borderColor: "rgb(0, 115, 230)",
        },{
          label: "Telecom",
          data: telecom,
          borderWidth: 1,
          backgroundColor: "#d90d2e",
          borderColor: "rgb(0, 115, 230)",
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