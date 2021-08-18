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

  let lastInput = { id: 'dateMEC', label: 'Date de mise en circulation', options: vehicule };
  const inputs = [lastInput];

  function onChangeHandler() {
    $('#' + lastInput.id).on('change', function(e) {
      console.log('.');
      // find the index of the input in the inputs list
      const ids = inputs.map(input => input.id);
      const index = ids.indexOf(e.target.id);
      // remove following inputs from the DOM
      $("#form div").slice(index + 1).remove();
      // remove following inputs from the input list
      inputs.splice(index + 1);
      // remove following inputs from the dataToSubmit object
      const _ids = inputs.map(x => x.id);
      for (const key in dataToSubmit)
        if (!_ids.includes(key))
          delete dataToSubmit[key];

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
      
      let title = null;
      let id = null;
      let label = null;
      let options = null;
      let optionsValues = null;

      // make the data of the new input
      if (Array.isArray(lastInput.options)) {
        const selected = lastInput.options.filter(x => x.value === e.target.value)[0];
        title = selected.nextTitle;
        id = selected.nextId;
        label = selected.nextLabel;
        options = selected.nextOptions;
        if (Array.isArray(options))
          optionsValues = options.map(x => x.value);
        else
          optionsValues = options.values;
      } else {
        title = lastInput.options.nextTitle;
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
          
          const _id = keys[i] === 'year' ? 'dateMEC' : keys[i];
          const __val = i === keys.indexOf(id) - 1 ? e.target.value : $('#' + _id).val();
          const _val = keys[i] === 'year' ? __val.split('-')[0] : __val;
          console.log('..' + keys[i]);
          console.log('..' + _val);
          params += (i > 0 ? '&' : '') + keys[i] + '=' + _val;
        }
        console.log(baseUrl + carAPIURLs[id] + params);
        
        $('#form').append(`
          <div id='spinner' class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `)

        const res = $.ajax({ 
          type: "GET",
          dataType: 'json',
          url: baseUrl + carAPIURLs[id] + params, 
          async: false,
        }).responseText;

        $('#spinner').remove();

        console.log(res);
        const jsonRes = JSON.parse(res);
        if (id === 'marque') {
          optionsValues = [
            ...jsonRes.marquesPopular.map(x => x.marque),
            ...jsonRes.marquesNotPopular.map(x => x.marque)
          ].sort()
        } else {
          const routeArray = carAPIURLs[id].split('/');
          const plural = routeArray[routeArray.length - 1];
          optionsValues = [...jsonRes[plural].map(x => x[id])].sort();
        }
      }

      const _title = `<h1 class="mb-3 mt-5">${title}</h1>`;

      if (optionsValues !== 'input') {
        let html = '';
        for (const optionValue of optionsValues)
          html += `<option value="${optionValue}">${optionValue}</option>`;
        
        $('#form').append(`
          <div>
            ${title ? _title : ''}
            <label for="${id}" class="form-label">${label}</label>
            <select class="form-select mb-3" id='${id}'>
              <option value=""></option>
              ${html}
            </select>
          </div>
        `)
      } else {
        $('#form').append(`
          <div>
            ${title ? _title : ''}
            <label for="${id}" class="form-label">${label}</label>
            <input id="${id}" class="form-control mb-3">
          </div>
        `)
      }
      
      lastInput = { title, id, label, options };
      inputs.push(lastInput);
      
      onChangeHandler();
    })
  }

  onChangeHandler();
})