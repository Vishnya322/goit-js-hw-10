
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const promiseDelay = document.querySelector(".form");
const button = document.querySelector(".btn-form");

promiseDelay.addEventListener('submit', e => {
  e.preventDefault();
  const delay = promiseDelay.elements.delay.value;
  const state = promiseDelay.elements.state.value; // Отримання значення стану з радіокнопок
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const fulfilled = state === 'fulfilled'; // Перевірка обраного стану
  
      if (fulfilled) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.success({
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`
      });
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});