'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const outText = document.querySelector('.out');

for (let i = 0; i < week.length; i++) {
  outText.innerHTML += week[i] + '<br>';
}



// let currentDate = (new Date()).toString().split(' ').slice(0, 3).join(' ');
