'use strict'
// 1) Выведите на страницу текущую дату и время в 2-х форматах: 
//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  

// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"


const day = new Date();
const outText = document.querySelector('.out');

const formateDate = date => {
  let getDate = date.getDate();
  if (getDate < 10) getDate = '0' + getDate;

  let getMonth = date.getMonth() + 1;
  if (getMonth < 10) getMonth = '0' + getMonth;

  let fullYear = date.getFullYear() % 100;
  if (fullYear < 10) fullYear = '0' + fullYear;

  return getDate + '.' + getMonth + '.' + fullYear;

};

const checkTime = time => {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

outText.innerHTML = formateDate(day) + ' - ' + checkTime(day.getHours()) + ':' + checkTime(day.getMinutes()) + ':' + checkTime(day.getSeconds());