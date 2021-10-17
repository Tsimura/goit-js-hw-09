// const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');

const options = {
  //вмикає вибір часу
  enableTime: true,
  //формат часу 24
  time_24hr: true,
  //Встановлює початкову вибрану дату.
  // Якщо ви використовуєте mode: "multiple"або календар діапазону поставляти
  // Arrayз Dateоб'єктів або масиву дат рядків , які слідують вашим dateFormat.
  // В іншому випадку можна вказати один об’єкт Date або рядок дати.
  defaultDate: new Date(),
  //встановлює крок відліку
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');

flatpickr('#datetime-picker', options);
btnStart.addEventListener('click', flatpickr);
// console.log(inputEl);
// console.log(btnStart);
// console.log(timerEl);

// https://github.com/goitacademy/javascript-homework/tree/main/v2/09

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
