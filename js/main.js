'use strict';

const fnc = function (str) {
  console.log(typeof str);
  if (typeof str !== 'string') {
    console.log('Это не строка');
  } else if(typeof str === 'string') {
    console.log(String('Это строка.').replace(/\s+/g, ''));
  };

  if (str.length > 30){
    console.log(String(str).substr(0, 30) + '...'); 
  } else {
    console.log('а эта строка меньше чем 30 символов.');
  }
};
//'Строка содержит больше чем 30 символов.'
fnc(1);