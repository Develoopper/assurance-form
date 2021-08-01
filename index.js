$(document).ready(function() {
  console.log("window is loaded");

  const inputs = [
    'marque',
    'model',
    'chevaux',
    'fonction'
  ]
  
  const fonctions = [
    'personnelle',
    'taxi',
  ]

  const marques = [
    { 
      nom: "Audi",
      models: [
        { 
          nom: "Audi - model 1", 
          chevaux: [5, 7, 8] 
        },
        { 
          nom: "Audi - model 2", 
          chevaux: [9, 10, 11] 
        },
        { 
          nom: "Audi - model 3", 
          chevaux: [12, 13, 14] 
        },
        { 
          nom: "Audi - model 4", 
          chevaux: [15, 16, 17] 
        },
      ],
    },
    { 
      nom: "Mercedes",
      models: [
        { 
          nom: "Audi - model 1", 
          chevaux: [5, 7, 8] 
        },
        { 
          nom: "Audi - model 3", 
          chevaux: [12, 13, 14] 
        },
      ],
    },
    { 
      nom: "BMW",
      models: [
        { 
          nom: "Audi - model 2", 
          chevaux: [9, 10, 11] 
        },
        { 
          nom: "Audi - model 4", 
          chevaux: [15, 16, 17] 
        },
      ],
    },
  ]


  for (let i = 0; i < inputs.length; i++) {
    $('#' + inputs[i]).on('change', function(e) {
      
      const selected = marques.filter(marque => marque.nom === e.target.value)[0]
    
      $('#' + inputs[i + 1]).val(selected.nom)
      for (let i = 0; i < marques.length; i++) {
        let marque = marques[i]
        $('#marque').append(`<option value='${marque.nom}'>${marque.nom}</option>`)
      }

      for (let j = i + 2; j < inputs.length; j++)
        $('#' + inputs[j]).val('')

    })
  }

  for (let i = 0; i < marques.length; i++) {
    let marque = marques[i]
    $('#marque').append(`<option value='${marque.nom}'>${marque.nom}</option>`)
  }
});