// let num = 266219; 1296

// arr = String(num).split('');

//   let result = arr.reduce(function(sum, current) {
//     return sum * current
//   });

// console.log(result);

let num = 123;
let arr = '';
let sum = 1;

arr = String(num).split('');

for (let i = 0; i < arr.length; i++) {
  sum *= arr[i];
};

console.log(sum);