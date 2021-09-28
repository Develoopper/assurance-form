const baseUrl = 'https://cars-api.zenithassurance.net/src/public/';
const carAPIURLs = {
  year: '', 
  marque: 'cars/marques', 
  model: 'cars/marque/models', 
  alimentation: 'cars/marque/model/alimentations', 
  chevaux: 'cars/marque/model/alimentation/chevaux', 
  carrosserie:  'cars/marque/model/alimentation/chevaux/carrosseries',
  version:  'cars/marque/model/alimentation/chevaux/carrosserie/versions',
};
const formData = {};

$(function() {
  const ids = Object.keys(carAPIURLs);
  
  for (let index = 0; index < ids.length - 1; index++) {
    let id = ids[index];
    let _id = ids[index] === 'year' ? 'dateMEC' : ids[index];
    const nextId = ids[index + 1];
    
    $('#' + _id).on('change', function(e) {
      for (let i = index + 1; i < ids.length; i++) {
        $('#' + ids[i]).html('');
        $('#' + ids[i]).prop('disabled', true);
      }
      
      if (e.target.value === '')
        return;
      
      const parent = $('#' + nextId).parent();
      parent.append(`
        <div id='spinner' class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      `)
      $('#' + nextId).hide();

      
      let params = '?';
      for (let j = 0; j <= index; j++) {
        const __id = ids[j] === 'year' ? 'dateMEC' :ids[j];
        const __val = $('#' + __id).val();
        const _val = ids[j] === 'year' ? __val.split('-')[0] : __val;
        params += (j > 0 ? '&' : '') + ids[j] + '=' + _val;     
      }
      
      const res = $.ajax({ 
        type: "GET",
        dataType: 'json',
        url: baseUrl + carAPIURLs[ids[index + 1]] + params, 
        async: false,
      }).responseText;
    
      $('#spinner').remove();
    
      const jsonRes = JSON.parse(res);
      if (id === 'year') {
        optionsValues = [
          ...jsonRes.marquesPopular.map(x => x.marque),
          ...jsonRes.marquesNotPopular.map(x => x.marque)
        ].sort()
      } else {
        const routeArray = carAPIURLs[ids[index + 1]].split('/');
        const plural = routeArray[routeArray.length - 1];
        optionsValues = [...jsonRes[plural].map(x => x[ids[index + 1]])].sort();
      }

      let html = `<option value=""></option>`;
      for (const optionsValue of optionsValues)
        html += `<option value="${optionsValue}">${optionsValue}</option>`;

      $('#' + nextId).html(html);
      $('#' + nextId).prop('disabled', false);
      $('#' + nextId).show();
    })
  }

  $('#form input:radio').on('change', function(e) {
    if (e.target.id === e.target.name + 'Oui')
      $(`#form div[name=${e.target.name}]`).css('display','block');
    else
      $(`#form div[name=${e.target.name}]`).css('display','none');
  })
    
  $('#submit').on('click', function() {
    $.ajax({ 
      type: "POST", 
      url: "http://example.com/form.php", 
      dataType: 'json',
      data: {
        "vehicule": {
          "yearDateMEC": 2019,
          "dateMEC": "2019-10-26",
          "marque": "volkswagen",
          "model": "GOLF VI",
          "alimentation": "Diesel",
          "chevaux": 6,
          "carrosserie": "Berline",
          "version": "1.6 TDI 105 MATCH DSG",
          "codeGta": "VW44225",
          "stationnement": "Voie publique",
          "usage": "D\u00e9placements priv\u00e9s et trajet travail",
          "codePostalPro": "45000",
          "kilometrage": "De 0 A 4999 KM",
          "financement": "Cr\u00e9dit",
          "remorque": "Non",
          "isActuellementAssure": "OUI",
          "isVehiculeAmenagePMR": "Non"
        },
        "conducteurPrincipal": {
          "antecedents": {
            "bonusMalus": "0.50",
            "isEteAssure36DerniersMois": "Oui",
            "dateResiliation36DerniersMois": "2018-10-2",
            "motifResiliation36DerniersMois": "non paiement",
            "isEuSinistres36DerniersMois": "Oui",
            "isEteResilie36DerniersMois": 1,
            "alcoolemie": {
              "sanction": {
                "dateInitialPermisApresAnnuGlation": "2020-11-1",
                "dateAnnulationPermis36DerniersMois": "2020-11-1",
                "dateSanction36DerniersMois": "2020-11-1",
                "dateSuspensionPermis36DerniersMois": "2020-11-1",
                "dateInfraction36DerniersMois": "2020-11-1",
                "typeSuspensionPermis36DerniersMois": "Suspension permis",
                "typeSanction": "Suspension permis",
                "suspensionPermisMotif36DerniersMois": "Alcoolemie",
                "nombreSuspensionPermis36AvecSinistreDerniersMois": 1,
                "nombreSuspensionPermis36SansSinistreDerniersMois": 2,
                "nombreMoisSuspensionPermis36DerniersMois": 6
              },
              "dateDernierAlcoolemie36DerniersMois": "2020-11-1",
              "nombreControlesPositifsAlcoolemie36DerniersMois": 1,
              "isRefusTestAlcoolemie36DerniersMois": "Non",
              "isDelitDeFuiteAlcoolemie36DerniersMois": "Oui",
              "controleAlcoolemieSuiteA36DerniersMois": "Controle routier",
              "controleAlcoolemieMethode36DerniersMois": "prise de sang",
              "tauxAlcoolemie": "2.0",
              "isAnnulationOuSuspensionPermis36DerniersMois": "suspension_permis"
            },
            "stupefiant": {
              "sanction": {
                "typeAnnulationPermis36DerniersMois": "Annulation permis",
                "typeSanction": "Annulation permis",
                "annulationPermisMotif36DerniersMois": "Stupefiant",
                "annulationPermisAvecOuSansSinistre36DerniersMois": "Sans sinistre"
              },
              "dateDernierStupefiant36DerniersMois": "2020-11-1",
              "nombreControlesPositifsStupefiants36DerniersMois": 1,
              "isRefusTestStupefiant36DerniersMois": "Non",
              "isDelitDeFuiteStupefiant36DerniersMois": "Non",
              "controleStupefiantSuiteA36DerniersMois": "Controle routier",
              "controleStupefiantMethode36DerniersMois": "prise de sang",
              "isAnnulationOuSuspensionPermis36DerniersMois": "annulation_permis"
            },
            "sinistres36DerniersMois": [
              {
                "dateSinistre36DerniersMois": "2019-12-2",
                "natureSinistre36DerniersMois": "Materiel responsable 50",
                "isPresenceTiersSinistres36DerniersMois": "Oui"
              },
            ]
          },
          "dateNaissance": "1993-8-16",
          "datePermis": "2012-12-2",
          "civilite": "Monsieur",
          "nom": "TEST",
          "prenom": "TEST Prenom",
          "typePermis": "Union Europeen",
          "situationFamiliale": "C",
          "profession": "Salari\u00e9 s\u00e9dentaire",
          "adresse": "test adresse",
          "codePostal": "45000",
          "ville": "Paris",
          "tel": "0664554847",
          "email": "sdgsdgsdg@sdfsd.com"
        },
        "urlSource": "URL de votre site ici",
        "deviceType": "D",
        "titulaireCarteGrise": "Conducteur Principal",
        "garantieSouhaiteeConducteurPrincipal": "Tiers simple",
      }, 
      success: function(data) { console.log("success", data); },
      error: function(error) { console.log("error", error); }
    })
  })
})