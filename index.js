$(function() {  
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
  const dataToSubmit = {};

  let lastInput = { id: 'dateMEC', label: 'Date de mise en circulation', options: rootNextOptions };
  const inputs = [lastInput];

  function onChangeHandler() {
    $('#' + lastInput.id).on('change', function(e) {
      // find the index of the input in the inputs list
      const ids = inputs.map(input => input.id);
      const index = ids.indexOf(e.target.id);
      // remove following inputs from the DOM
      $("#form div").slice(index + 1).remove();
      // remove following inputs from the input list
      inputs.splice(index + 1);
      // remove following inputs from the dataToSubmit object
      const _ids = inputs.map(x => x.id);
      Object.keys(dataToSubmit).map(key => {
        if (!_ids.includes(key))
          delete dataToSubmit[key];
      })

      lastInput = inputs[index];

      if (e.target.value === '')
        return;

      // add input to the dataToSubmit object
      dataToSubmit[lastInput.id] = e.target.value;
      console.log(dataToSubmit);

      // // if the input is one of the car api params add its values to carApiURLs
      // if (Object.keys(carApiURLs).includes(lastInput.id))
      //   carApiURLs[lastInput.id].params = e.target.value;
      
      // if the input is the last show the submit button
      if (!Array.isArray(lastInput.options) && !lastInput.options.nextOptions) {
        $('#form').append(`
          <div>
            <button type="button" id="submit" class="btn btn-dark">
              Submit
            </button>
          </div>
        `)

        $('#submit').on('click', function() {
          $.ajax({ type: "POST", url: "http://example.com/form.php", data: dataToSubmit, dataType: 'json',
            success: function(data) { console.log("success", data); },
            error: function(error) { console.log("error", error); }
          })
        })
        return;
      }
      
      let id = null;
      let label = null;
      let options = null;
      let optionsValues = null;

      // make the data of the new input
      if (Array.isArray(lastInput.options)) {
        const selected = lastInput.options.filter(x => x.value === e.target.value)[0];
        id = selected.nextId;
        label = selected.nextLabel;
        options = selected.nextOptions;
        if (Array.isArray(options))
          optionsValues = options.map(x => x.value);
        else
          optionsValues = options.values;
      } else {
        id = lastInput.options.nextId;
        label = lastInput.options.nextLabel;
        options = lastInput.options.nextOptions;
        if (Array.isArray(options))
          optionsValues = options.map(x => x.value);
        else
          optionsValues = options.values;
      }
      
      // add the new input to the DOM
      if (optionsValues === 'ajax') {
        const keys = Object.keys(carAPIURLs);
        let params = '?';
        for (let i = 0; i < keys.length; i++) {
          if (i >= keys.indexOf(id))
            break;
            
          const _id = keys[i] === 'year' ? 'dateMEC' : 'year';
          const _val = keys[i] === 'year' ? $('#' + _id).val().split('-')[0] : $('#' + _id).val();
          params += i > 0 ? '&' : '' + keys[i] + '=' + _val;
        }
        console.log(baseUrl + carAPIURLs[id] + params);
        const res = $.ajax({ 
          type: "GET", 
          url: baseUrl + carAPIURLs[id] + params, 
          async: false,
        }).responseText;
      }

      let html = '';
      for (const optionValue of optionsValues)
        html += `<option value="${optionValue}">${optionValue}</option>`;
      
      $('#form').append(`
        <div>
          <label for="${id}" class="form-label">${label}</label>
          <select class="form-select mb-3" id='${id}'>
            <option value=""></option>
            ${html}
          </select>
        </div>
      `)
      
      lastInput = { id, label, options };
      inputs.push(lastInput);
      
      onChangeHandler();
    })
  }

  onChangeHandler();
});