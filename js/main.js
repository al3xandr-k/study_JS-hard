// let num = 266219; 1296

// arr = String(num).split('');

//   let result = arr.reduce(function(sum, current) {
//     return sum * current
//   });

// console.log(result);

//! 1
let num = 266219;

//! 2
let arr = '';
let sum = 1;

arr = String(num).split('');

for (let i = 0; i < arr.length; i++) {
  sum *= arr[i];
};

console.log(sum);

//! 3
let pow = sum ** 3;
console.log(pow);

//! 4
let result = '';
result = String(pow).split('');
result = Number(result[0] + result[1])

console.log(result);