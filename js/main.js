'use strict'

let string1 = 'Это не строка.';
let string2 = 'Это строка.';
let string3 = 'Текст состоящий из 30 символов.';


//Условие 1

function foo(param) {
  if (param !== String(param)){
    console.log(string1);
  } else if (param === String(param)){
    console.log(string2);
  }
};
foo(1);

//Условие 2

function foo2(param) {
  if (param !== String(param)){
    console.log(string1);
  } else if (param === String(param)){
    console.log(string2.replace(/\s+/g, ''));
  }
};

foo2('1');

//Условие 3
function foo3() {
  console.log(string3 = string3.substr(0, 30) + '...');
};

foo3();