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
  // for (let i = 0; i < position; i += 1) {
  // console.log(i);
  console.log('DELAY:', DELAY);
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
  // }
}

// setPromises(5);
function setPromises(v, delay) {
  for (let i = 0; i < v; i += 1) {
    // console.log(i);
    DELAY += 1000;
    createPromise().then(onSuccess).catch(onError);
  }
}

// createPromise(4).then(onSuccess).catch(onError);

function onSuccess(result) {
  console.log(result);
}

function onError(error) {
  console.log(error);
}

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const delayEl = formElement.delay.value;
  const stepEl = formElement.step.value;
  const amountEl = formElement.amount.value;
  const formData = { delayEl, stepEl, amountEl };
  // DELAY = delayEl;
  console.log('formData:', formData);
  console.log('delayEl:', delayEl);
  console.log('stepEl:', stepEl);
  console.log('amountEl:', amountEl);

  setPromises(5);
  ref.form.reset();
}

// function position({ delayEl, stepEl, amountEl }) {
//   for (let i = 0; i < amountEl; i += 1) {
//     onFormSubmit();
//     let amountEl = 1;
//     amountEl += i;
//     // delayEl += stepEl;
//     console.log('amount:', amountEl);
//     console.log(delayEl);
//     console.log(stepEl);
//   }
// }

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

// function getSolution() {
//   return Math.random() > 0.3;
// }
