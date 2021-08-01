$(function() {  
  const dataToSubmit = {};

  const rootPath = [
    {
      valeur: 'root',
      nextId: 'Marque',
      path: [
        { 
          valeur: "Audi",
          nextId: 'Model',
          path: [
            { 
              valeur: "Audi - model 1", 
              nextId: 'Chevaux',
              path: {
                valeurs: ['5', '7', '8'],
                nextId: 'Carburant',
                path: [
                  { 
                    valeur: "Diesel", 
                    nextId: 'Fonction',
                    path: {
                      valeurs: ['Personnelle', 'Taxi'],
                    },
                  },
                  { 
                    valeur: "Essence", 
                    nextId: 'Parking',
                    path: {
                      valeurs: ['Garage'],
                    },
                  },
                ]
              }
            },
            { 
              valeur: "Audi - model 2", 
              nextId: 'Chevaux',
              path: {
                valeurs: [9, 10, 11],
              },
            },
            { 
              valeur: "Audi - model 3", 
              nextId: 'Chevaux',
              path: {
                valeurs: [12, 13, 14],
              } 
            },
            { 
              valeur: "Audi - model 4", 
              nextId: 'Chevaux',
              path: {
                valeurs: [15, 16, 17],
              } 
            },
          ],
        },
        { 
          valeur: "Mercedes",
          nextId: 'Model',
          path: [
            { 
              valeur: "Mercedes - model 1", 
              nextId: 'Chevaux',
              path: {
                valeurs: [5, 7, 8],
              }
            },
            { 
              valeur: "Mercedes - model 3", 
              nextId: 'Chevaux',
              path: {
                valeurs: [12, 13, 14],
              } 
            },
          ],
        },
        { 
          valeur: "BMW",
          nextId: 'Model',
          path: [
            { 
              valeur: "BMW - model 2", 
              nextId: 'Chevaux',
              path: {
                valeurs: [9, 10, 11],
              } 
            },
            { 
              valeur: "BMW - model 4", 
              nextId: 'Chevaux',
              path: {
                valeurs: [15, 16, 17],
              } 
            },
          ],
        },
      ],
    }
  ];

  // for (let i = 0; i < rootPath.length; i++) {
  //   let marque = rootPath[i];
  //   $('#Marque').append(`<option value='${marque.valeur}'>${marque.valeur}</option>`)
  // }

  let lastInput = { id: 'root', nextId: 'Marque', path: rootPath };

  function onChangeHandler() {
    $('#' + lastInput.id).on('change', function(e) {
      if (e.target.value === '')
        return;

      let nextInputId = null;
      let nextInputNextId = null;
      let nextInputPath = null;
      let nextInputValues = null;

      if (Array.isArray(lastInput.path)) {
        selected = lastInput.path.filter(x => x.valeur === e.target.value)[0];
        nextInputId = selected.nextId;
        nextInputPath = selected.path;
      } else {
        nextInputId = lastInput.nextId;
        nextInputNextId = lastInput.path.nextId;
        nextInputPath = lastInput.path.path;
      }
      
      console.log('nextInputId', nextInputId);
      console.log('nextInputNextId', nextInputNextId);
      if (!nextInputId)
        return;

      if (Array.isArray(nextInputPath))
        nextInputValues = nextInputPath.map(x => x.valeur);
      else
        nextInputValues = nextInputPath.valeurs;

      let options = '';
      for (const value of nextInputValues)
        options += `<option value="${value}">${value}</option>`

      $('#form').append(`
        <label for="${nextInputId}" class="form-label">${nextInputId}</label>
        <select class="form-select mb-3" id='${nextInputId}'>
          <option value=""></option>
          ${options}
        </select>
      `)
  
      lastInput = { id: nextInputId, nextId: nextInputNextId, path: nextInputPath };

      onChangeHandler();
    })
  }

  onChangeHandler();
  $('#root').trigger('change', 'root');

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