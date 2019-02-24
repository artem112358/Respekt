$(() => {
  $('#plus').click(() => {
    calculate(1);
  });
  $('#minus').click(() => {
    calculate(2);
  });
  $('#angam').click(() => {
    calculate(3);
  });
  $('#bajanac').click(() => {
    calculate(4);
  });

  calculate = (ch) => {
      let value1 = $('#value1').val();
      let value2 = $('#value2').val();
      if (ch === 1) {
          let total = parseFloat(value1) + parseFloat(value2);
          $('#display').html(total);
      }
      if (ch === 2) {
          let total = parseFloat(value1) - parseFloat(value2);
          $('#display').html(total);
      }
      if (ch === 3) {
          let total = parseFloat(value1) * parseFloat(value2);
          $('#display').html(total);
      }
      if (ch === 4) {
          let total = parseFloat(value1) / parseFloat(value2);
          $('#display').html(total);
      }
  }
});
