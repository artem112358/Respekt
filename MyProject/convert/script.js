$(() => {
  // $('#input1')
  $('.convert-button').click(() => {
    let selectOne = $('.select1').val();
    let result = 0;

    if (selectOne === 'USD') {
      result = calculateCourse(1, 0.88, 68.37);
    } else if (selectOne === 'EURO') {
      result = calculateCourse(0.88, 1, 74.14);
    } else if (selectOne === 'RUB') {
      result = calculateCourse(0.015, 0.012, 1);
    }

    $('#input2').val(result);
  });

  calculateCourse = (usd, eur, rub) => {
    let selectTwo = $('.select2').val();
    let inputOne = $('#input1').val();

    if (selectTwo === 'USD') {
      return inputOne * usd;
    } else if (selectTwo === 'EURO') {
      return inputOne * eur;
    } else if (selectTwo === 'RUB') {
      return inputOne * rub;
    }
  }

  $('.select1').change(() => {
    let selectOne = $('.select1').val();
    let inputIcon1 = $('.input-icon1');

    if(selectOne == 'USD') {
      return inputIcon1.html('$');
    } else if(selectOne == 'EURO') {
      return inputIcon1.html('€');
    } else if(selectOne == 'RUB') {
      return inputIcon1.html('₽');
    } else {
      return inputIcon1.html('');
    }
  });

  $('.select2').change(() => {
    let selectTwo = $('.select2').val();
    let inputIcon2 = $('.input-icon2');

    if(selectTwo == 'USD') {
      return inputIcon2.html('$');
    } else if(selectTwo == 'EURO') {
      return inputIcon2.html('€');
    } else if(selectTwo == 'RUB') {
      return inputIcon2.html('₽');
    } else {
      return inputIcon2.html('');
    }
  });

});
