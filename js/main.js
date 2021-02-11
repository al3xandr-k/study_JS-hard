'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const outText1 = document.querySelector('.out1');
const outText2 = document.querySelector('.out2');
const outText3 = document.querySelector('.out3');
const outText4 = document.querySelector('.out4');
let currentDate = new Date();

outText1.innerHTML = week;

for (let i = 0; i < week.length; i++) {
  outText2.innerHTML += week[i] + '<br>';
}

outText3.innerHTML = `${week.splice(0, 5)},<strong>${week.splice(-2)}</strong>`;


outText4.innerHTML = `<strong>${currentDate.toString().split(' ').slice(0, 3).join(' ')}</strong>`;