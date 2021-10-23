const ref = {
  form: document.querySelector('form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btn: document.querySelector('button[type="submit"]'),
};

ref.form.addEventListener('submit', onFormSubmit);

let DELAY = 1000;

function createPromise(position, delay) {
  console.log('Current DELAY:', DELAY);
  // DELAY += position;
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

function setPromises(v, delay) {
  for (let i = 0; i < v; i += 1) {
    // console.log(i);
    DELAY += 1000;
    createPromise().then(onSuccess).catch(onError);
  }
}

function onSuccess(result) {
  console.log(result);
}

function onError(error) {
  console.log(error);
}

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const delayEl = parseInt(formElement.delay.value);
  const stepEl = parseInt(formElement.step.value);
  const amountEl = parseInt(formElement.amount.value);
  const formData = { delayEl, stepEl, amountEl };

  console.log('formData:', formData);
  // console.log('delayEl:', delayEl);
  // console.log('stepEl:', stepEl);
  // console.log('amountEl:', amountEl);

  createDalay(delayEl, stepEl, amountEl);
  setPromises(amountEl);

  ref.form.reset();
}

function createDalay(delay, step, amount) {
  const values = Object.values({ delay, step, amount });
  console.log(values);
  let delayValue = 0;

  for (const value of values) {
    delayValue += value;
    console.log(delayValue);
  }
}

// createCunter(5);
// function createCunter(amount) {
//   // makeDelay(1, 1, 2);
//   for (let i = 0; i < amount; i += 1) {
//     let amount = 1;
//     amount += i;
//     // console.log(amount);

//     createPromise(2, 1500).then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${amount} in ${i + 1}ms`);
//     });
//     // delay += amount;
//   }
// }
