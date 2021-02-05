'use strict';
//1 ЗАДАНИЕ
let arr = ['6785', '253', '89499', '41', '50696', '498892', '222'];

let a = arr.filter(el => { return el[0] === '2' });
let b = arr.filter(el => { return el[0] === '4' });

console.log('a: ', a);
console.log('b: ', b);

//2 ЗАДАНИЕ
for (let i = 1; i <= 100; i += 2) {
  console.log(i + ' Делители этого числа: 1 и ' + i);
};
