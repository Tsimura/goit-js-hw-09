const ref = {
  form: document.querySelector('form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btn: document.querySelector('button[type="submit"]'),
};

// ref.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    // const delay = 1000;
    setTimeout(() => {
      // if (shouldResolve) {
      resolve({ position, delay });
      // }
      // else {
      //   reject(`❌ Rejected promise ${position} in ${delay}ms`);
      // }
    }, delay);
  });
}

createCunter(5);
function createCunter(amount) {
  makeDelay(1, 1, 2);
  for (let i = 0; i < amount; i += 1) {
    let amount = 1;
    amount += i;
    // console.log(amount);

    createPromise(2, 1500).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${amount} in ${i}ms`);
    });
    // delay += amount;
  }
}

// makeDelay(0, 1, 2);
function makeDelay(delay, step, amount) {
  for (let i = 0; i < amount; i += 1) {
    delay += step;
    console.log(delay);
  }
}
// createPromise(2, 1500).then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// });

// function onMakeSuccess(result) {
//   console.log(`✅ Fulfilled promise `);
// }

// function onMakeError(error) {
//   console.log(`❌ Rejected promise `);
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formElement = event.currentTarget.elements;
//   const delayEl = formElement.delay.value;
//   const stepEl = formElement.step.value;
//   const amountEl = formElement.amount.value;
//   const formData = { delayEl, stepEl, amountEl };
//   // console.log(delayEl);
//   // console.log(stepEl);
//   // console.log(amountEl);
//   // console.log(formData);

//   // createPromise(2).then(onMakeSuccess).catch(onMakeError);
// }

// function getSolution() {
//   return Math.random() > 0.3;
// }

//Матеріал із завдання!!!
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// console.log(ref.form);
// console.log(ref.firstDelay);
// console.log(ref.delayStep);
// console.log(ref.amount);
// console.log(ref.btn);
