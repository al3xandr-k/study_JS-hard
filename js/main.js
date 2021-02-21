'use strict'

setInterval(() => {
  const date = new Date();
  const outText = document.querySelector('.out');
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

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

  outText.innerHTML = formateDate(date) + ' - ' + checkTime(hours) + ':' + checkTime(minutes) + ':' + checkTime(seconds);
}), (1000);