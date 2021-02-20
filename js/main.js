'use strict'

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const outText = document.querySelector('.out');
const date = new Date();
const currentDate = date.getDay();

week.map((item, index) => {
  if (index > 0 && index < 6) {
    if (index === currentDate) {
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.innerHTML = item;
      outText.append(span);
      outText.append(br);
    } else {
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.innerHTML = item;
      outText.append(span);
      outText.append(br);
    }
  } else if (index === 0 || index === 6) {
    if (index === currentDate) {
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.style.fontStyle = 'italic';
      span.style.fontWeight = 'bold';
      span.innerHTML = item;
      outText.append(span);
      outText.append(br);
    } else {
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.style.fontWeight = 'bold';
      span.innerHTML = item;
      outText.append(span);
      outText.append(br);
    }
  }
});