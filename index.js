$(function() {  
  const fonctions = [
    'personnelle',
    'taxi',
  ]

  const data = {
    'Marque': [
      { 
        valeur: "Audi",
        'Model': [
          { 
            valeur: "Audi - model 1", 
            'Chevaux': [5, 7, 8] 
          },
          { 
            valeur: "Audi - model 2", 
            'Chevaux': [9, 10, 11] 
          },
          { 
            valeur: "Audi - model 3", 
            'Chevaux': [12, 13, 14] 
          },
          { 
            valeur: "Audi - model 4", 
            'Chevaux': [15, 16, 17] 
          },
        ],
      },
      { 
        valeur: "Mercedes",
        'Model': [
          { 
            valeur: "Mercedes - model 1", 
            'Chevaux': [5, 7, 8] 
          },
          { 
            valeur: "Mercedes - model 3", 
            'Chevaux': [12, 13, 14] 
          },
        ],
      },
      { 
        valeur: "BMW",
        'Model': [
          { 
            valeur: "BMW - model 2", 
            'Chevaux': [9, 10, 11] 
          },
          { 
            valeur: "BMW - model 4", 
            'Chevaux': [15, 16, 17] 
          },
        ],
      },
    ]
  }

  let lastInput = {
    id: 'Marque', 
    data: data['Marque']
  };

  function onChangeHandler() {
    $('#' + lastInput.id).on('change', function(e) {
      if (e.target.value === '')
        return;
  
      const selected = lastInput.data.filter(x => x.valeur === e.target.value)[0];
      const nextInputId = Object.keys(selected)[1];
      const nextInputData = selected[nextInputId];
  
      $('#form').append(`
        <label for="${nextInputId}" class="form-label">${nextInputId}</label>
        <select class="form-select mb-3" id='${nextInputId}'>
          <option value=""></option>
          ${nextInputData.map(x => `<option value="${x.valeur}">${x.valeur}</option>`)}
        </select>
      `)
  
      lastInput = { id: nextInputId, data: nextInputData };
      onChangeHandler()
    })
  }
  
  for (let i = 0; i < data['Marque'].length; i++) {
    let marque = data['Marque'][i];
    $('#Marque').append(`<option value='${marque.valeur}'>${marque.valeur}</option>`)
  }

  onChangeHandler();

  // for (let i = 0; i < inputs.length; i++) {
  //   $('#' + inputs[i]).on('change', function(e) {
      
  //     const selected = marques.filter(marque => marque.valeur === e.target.value)[0]
    
  //     $('#' + inputs[i + 1]).val(selected.valeur)
  //     for (let i = 0; i < marques.length; i++) {
  //       let marque = marques[i]
  //       $('#' + inputs[i + 1]).append(`<option value='${marque.valeur}'>${marque.valeur}</option>`)
  //     }

  //     for (let j = i + 2; j < inputs.length; j++)
  //       $('#' + inputs[j]).val('')

  //   })
  // }
});