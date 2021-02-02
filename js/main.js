'use strict'

//1 ЗАДАНИЕ
let lang = 'en';

let arr = [
  ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
  ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
];


if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
  default:
    console.log('что та пошло не так');
};

for (let i = 0; i < arr.length - 1; i++) {
  lang === 'ru' ? console.log(arr[0].toString()) :
    lang === 'en' ? console.log(arr[1].toString()) :
      console.log('что та пошло не так');
};


// 2 ЗАДАНИЕ
let namePerson = 'Максим';

(namePerson === 'Максим') ? console.log('Директор') :
  (namePerson === 'Максим') ? console.log('Преподаватель') :
    console.log('Студент');
