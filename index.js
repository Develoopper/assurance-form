$(function() {  
  const dataToSubmit = {};

  let first = true;
  let lastInput = { id: 'root', options: rootNextOptions };
  const inputs = [lastInput];

  function onChangeHandler() {
    $('#' + lastInput.id).on('change', function(e) {
      const ids = inputs.map(input => input.id);
      let i = 0;
      let index = null;
      for (const id of ids) {
        if (id === e.target.id)
          index = i;
        i++;
      }
      $("#form div").slice(index + 1).remove();
      inputs.splice(index + 1);
      console.log('k', inputs);

      lastInput = inputs[index];

      if (e.target.value === '')
        return;

      if (lastInput.id !== 'root')
        dataToSubmit[lastInput.id] = e.target.value;
      console.log(dataToSubmit);
      
      if (!Array.isArray(lastInput.options) && !lastInput.options.nextOptions) {
        $('#form').append(`
          <div>
            <button type="button" id="submit" class="btn btn-dark">
              Submit
            </button
          </div>
        `)

        $('#submit').on('click', function() {
          $.post('http://example.com/form.php', dataToSubmit);
        })
        return;
      }
      
      let id = null;
      let options = null;
      let optionsValues = null;
      
      if (Array.isArray(lastInput.options)) {
        const selected = lastInput.options.filter(x => x.value === e.target.value)[0];
        id = selected.nextId;
        options = selected.nextOptions;
        if (Array.isArray(options))
        optionsValues = options.map(x => x.value);
        else
        optionsValues = options.values;
      } else {
        id = lastInput.options.nextId;
        options = lastInput.options.nextOptions;
        if (Array.isArray(options))
        optionsValues = options.map(x => x.value);
        else
        optionsValues = options.values;
      }
      
      let html = '';
      for (const optionValue of optionsValues)
      html += `<option value="${optionValue}">${optionValue}</option>`
      
      $('#form').append(`
        <div>
          <label for="${id}" class="form-label">${id}</label>
          <select class="form-select mb-3" id='${id}'>
            <option value=""></option>
            ${html}
          </select>
        </div>
      `)
      
      console.log(id);
      
      lastInput = { id, options };
      if (first) {
        inputs[0] = lastInput;
        first = false;
      } else {
        inputs.push(lastInput);
      }
      console.log(inputs);
      
      onChangeHandler();
    })
  }

  onChangeHandler();
  $('#root').trigger('change');
});