'use strict'

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let outText1 = document.querySelector('.out1');
let outText2 = document.querySelector('.out2');


let formateDate = date => {
  let getDate = date.getDate();
  if (getDate < 10) getDate = '0' + getDate;

  let getMonth = date.getMonth() + 1;
  if (getMonth < 10) getMonth = '0' + getMonth;

  let fullYear = date.getFullYear() % 100;
  if (fullYear < 10) fullYear = '0' + fullYear;

  return getDate + '.' + getMonth + '.' + fullYear;
};

let checkTime = time => {
  if (time < 10) {
    time = "0" + time;
  };
  return time;
};

let clock = () => {
  let date = new Date();
  let hours = checkTime(date.getHours());
  let minutes = checkTime(date.getMinutes());
  let seconds = checkTime(date.getSeconds());
  let month = date.getMonth();
  let year = date.getFullYear();
  let currentDay = date.getDay();

  let setSeconds = (sec) => {

    if (sec === 1 || sec === 21 || sec === 31 || sec === 41 || sec === 51) {
      return seconds + ' секунда ';
    } else if (sec === 2 || sec === 3 || sec === 4 || sec === 22 || sec === 23 || sec === 24 || sec === 32 || sec === 33 || sec === 34 || sec === 42 || sec === 43 || sec === 44 || sec === 52 || sec === 53 || sec === 54) {
      return seconds + ' секунды ';
    } else {
      return seconds + ' секунд ';
    };
  };

  setSeconds(seconds);

  let setMinutes = (min) => {
    if (min === 1 || min === 21 || min === 31 || min === 41 || min === 51) {
      return minutes + " минута "
    } else if (min === 2 || min === 3 || min === 4 || min === 22 || min === 23 || min === 24 || min === 32 || min === 33 || min === 34 || min === 42 || min === 43 || min === 44 || min === 52 || min === 53 || min === 54) {
      return minutes + " минуты ";
    } else {
      return minutes + " минут ";
    };
  };

  setMinutes(minutes);

  let setHours = (hour) => {
    if (hour === 1 || hour === 21) {
      return hours + ' час ';
    } else if (hour === 2 || hour === 3 || hour === 4 || hour === 22 || hour === 23 || hour === 24) {
      return hours + ' часа ';
    } else {
      return hours + ' часов ';
    };
  };

  setHours(hours);

  let time = date.getDate() + ' ' + months[month] + ' ' + year + ' года, ' + setHours(hours) + setMinutes(minutes) + setSeconds(seconds);

  week.map((day, indexDay) => {
    if (indexDay === currentDay) {
      outText1.innerHTML = `a) Сегодня ${day}, ${time}`;
    };
  });
};

setInterval(clock, 1000);

let dateTime = () => {
  let date = new Date();
  let hours = checkTime(date.getHours());
  let minutes = checkTime(date.getMinutes());
  let seconds = checkTime(date.getSeconds());

  outText2.textContent = 'б) ' + formateDate(date) + ' - ' + hours + ':' + minutes + ':' + seconds;
};

setInterval(dateTime, 1000);