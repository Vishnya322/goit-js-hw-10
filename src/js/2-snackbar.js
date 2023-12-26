import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const promiseDelay = document.querySelector(".form");

promiseDelay.addEventListener('submit', e => {
  e.preventDefault();

  const delay = promiseDelay.elements.delay.value;
  const state = promiseDelay.elements.state.value; 

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const fulfilled = state === 'fulfilled'; 
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

    promiseDelay.elements.delay.value = '';
  
  const radioButtons = document.querySelectorAll('input[type="radio"][name="state"]');
  radioButtons.forEach(button => {
    button.checked = false;
  });
});