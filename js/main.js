'use strict'

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const outText = document.querySelector('.out');
let str = '';


const currentDay = week.map();








str = week.slice(1, 6).map(item => item + '<br>') + '<i>' + week.slice(6, 7) + '</i>' + '<br>' + '<strong>' + (new Date().toString().split(' ').slice(0, 3).join(' ')) + '</strong>';

outText.innerHTML = str;