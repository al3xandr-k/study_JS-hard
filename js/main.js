'use strict'

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const outText = document.querySelector('.out');
const date = new Date();
const currentDay = date.getDay();

week.map((day, indexDay) => {
  if (indexDay > 0 && indexDay < 6) {
    if (indexDay === currentDay) {
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.style.fontStyle = 'italic';
      span.innerHTML = day;
      outText.append(span);
      outText.append(br);
    } else {
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.innerHTML = day;
      outText.append(span);
      outText.append(br);
    }
  } else if (indexDay === 0 || indexDay === 6) {
    if (indexDay === currentDay) {
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.style.fontWeight = 'bold';
      span.style.fontStyle = 'italic';
      span.innerHTML = day;
      outText.append(span);
      outText.append(br);
    } else {
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.innerHTML = day;
      span.style.fontWeight = 'bold';
      outText.append(span);
      outText.append(br);
    }
  }
});