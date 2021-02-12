'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const outText = document.querySelector('.out');
let currentDate = (new Date()).toString().split(' ').slice(0, 3).join(' ');

outText.innerHTML = `${week[0]}<br>${week[1]}<br>${week[2]}<br>${week[3]}<br><strong>${week[4]} - ${currentDate}</strong><br><i>${week[5]}</i><br><i>${week[6]}</i><br>`