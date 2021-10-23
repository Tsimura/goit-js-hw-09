import Notiflix from 'notiflix';

const ref = {
  form: document.querySelector('form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btn: document.querySelector('button[type="submit"]'),
};

ref.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const delayEl = parseInt(formElement.delay.value);
  const stepEl = parseInt(formElement.step.value);
  const amountEl = parseInt(formElement.amount.value);
  const formData = { delayEl, stepEl, amountEl };

  console.log('formData:', formData);

  setPromises(delayEl, stepEl, amountEl);

  ref.form.reset();
  DELAY = 0;
}

let DELAY = 0;

function createPromise(position, DELAY) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve('✅ Fulfilled promise! ');
      } else {
        reject('❌ Rejected promise!');
      }
    }, DELAY);
  });
}

function setPromises(delay, step, amount) {
  const values = Object.values({ delay, step, amount });
  let firstDelay = delay;
  DELAY = delay;
  console.log('firstDelay:', firstDelay);

  for (let i = 0; i < amount; i += 1) {
    DELAY += step;
    let delayValue = DELAY;
    console.log('DELAY:', DELAY);

    createPromise(i, DELAY)
      .then((position, delay) => {
        console.log(`✅ Fulfilled promise ${i + 1} in ${delayValue}ms`);
        Notiflix.Notify.success(`Fulfilled promise ${i + 1} in ${delayValue}ms`);
      })
      .catch((position, delay) => {
        console.log(`❌ Rejected promise ${i + 1} in ${delayValue}ms`);
        Notiflix.Notify.failure(`Rejected promise ${i + 1} in ${delayValue}ms`);
      });
  }
}

// function onSuccess(result) {
//   console.log(result);
// }

// function onError(error) {
//   console.log(error);
// }
