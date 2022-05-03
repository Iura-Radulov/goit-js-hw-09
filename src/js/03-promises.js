import Notiflix from 'notiflix';

const refs = {
  formBtnEl: document.querySelector(".form"),
  delayEl: document.querySelector("input[name='delay']"),
  stepEl: document.querySelector("input[name='step']"),
  amountEl: document.querySelector("input[name='amount']"),
};

refs.formBtnEl.addEventListener("submit", onCreatePromiseBtn);

function onCreatePromiseBtn(evt) {
  evt.preventDefault();

  let delay = Number(refs.delayEl.value);
  const position = refs.amountEl.value;
  let step = Number(refs.stepEl.value);

  for (let i = 1; i <= position; i += 1) {
    createPromise(i, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    let shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })  
}
