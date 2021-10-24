import Notiflix from 'notiflix';

const ref = {
  form: document.querySelector('form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btn: document.querySelector('button[type="submit"]'),
};

ref.form.addEventListener('submit', onFormSubmit);

//Варіант 1 згідно ТЗ
function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const firstDelay = parseInt(formElement.delay.value);
  const delayStep = parseInt(formElement.step.value);
  const amountValue = parseInt(formElement.amount.value);
  const formData = { firstDelay, delayStep, amountValue };
  // console.log('formData:', formData);

  // value(firstDelay, delayStep, amountValue);

  makeMultiplePromises(firstDelay, delayStep, amountValue);
  ref.form.reset();
  delay = 0;
}

let delay = 0;
let position = 0;
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function makeMultiplePromises(firstDelay, delayStep, amount) {
  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      delay = firstDelay;
    } else {
      delay += delayStep;
    }
    position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

// function value(del, step, amount) {
//   console.log('First delay:', del);
//   console.log('Delay step:', step);
//   console.log('Amount:', amount);
// }

//Варіант 2, робочий на всі 100, але не зовстім по ТЗ :(

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formElement = event.currentTarget.elements;
//   const delayEl = parseInt(formElement.delay.value);
//   const stepEl = parseInt(formElement.step.value);
//   const amountEl = parseInt(formElement.amount.value);
//   const formData = { delayEl, stepEl, amountEl };

//   // console.log('formData:', formData);
//   setPromises(delayEl, stepEl, amountEl);

//   ref.form.reset();
//   DELAY = 0;
// }

// let DELAY = 0;

// function createPromise(position, DELAY) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve('✅ Fulfilled promise! ');
//       } else {
//         reject('❌ Rejected promise!');
//       }
//     }, DELAY);
//   });
// }

// function setPromises(delay, step, amount) {
//   for (let i = 0; i < amount; i += 1) {
//     if (i == 0) {
//       DELAY = delay;
//     } else {
//       DELAY += step;
//     }

//     let delayValue = DELAY;
//     // console.log('DELAY:', DELAY);

//     createPromise(i, DELAY)
//       .then((position, delay) => {
//         // console.log(`✅ Fulfilled promise ${i + 1} in ${delayValue}ms`);
//         Notiflix.Notify.success(`Fulfilled promise ${i + 1} in ${delayValue}ms`);
//       })
//       .catch((position, delay) => {
//         // console.log(`❌ Rejected promise ${i + 1} in ${delayValue}ms`);
//         Notiflix.Notify.failure(`Rejected promise ${i + 1} in ${delayValue}ms`);
//       });
//   }
// }
