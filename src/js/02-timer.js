// const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  timerEl: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  //Встановлює початкову вибрану дату.
  // Якщо ви використовуєте mode: "multiple"або календар діапазону поставляти
  // Arrayз Dateоб'єктів або масиву дат рядків , які слідують вашим dateFormat.
  // В іншому випадку можна вказати один об’єкт Date або рядок дати.
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = Date.now();
    if (currentDate > selectedDates[0]) {
      return alert('Please choose a date in the future');
    } else {
      refs.btnStart.removeAttribute('disabled');

      setInterval(() => {
        const timer = Date.now() - currentDate;
        const timeDifference = selectedDates[0] - currentDate;
        const { days, hours, minutes, seconds } = convertMs(timeDifference - timer);
        console.log('Зворотній відлік часу:', `${days}:${hours}:${minutes}:${seconds}`);
        updateTimer({ days, hours, minutes, seconds });
      }, 1000);
    }
  },
};

flatpickr('#datetime-picker', options);
refs.btnStart.addEventListener('click', flatpickr);

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

// https://github.com/goitacademy/javascript-homework/tree/main/v2/09
