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
