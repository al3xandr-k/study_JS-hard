// 'use strict'

const outText = document.querySelector('.out');
const week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];


var arrays = [], size = 1;

while (week.length > 0) {
  arrays.push(week.splice(0, size));
}

outText.innerHTML = arrays;
outText.style.display = 'flex';
outText.style.flexDirection = 'column';

