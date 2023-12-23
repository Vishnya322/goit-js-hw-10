import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");

let userSelectedDate = "";
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      button.setAttribute("disabled", true);
    } else {
      button.removeAttribute("disabled");
      userSelectedDate = selectedDates[0];
    }
  },
};

const datePicker = flatpickr(input, options);

input.addEventListener('focus', () => {
  datePicker.config.defaultDate = new Date();
});

button.addEventListener('click', () => {
  
  const selectedDateTime = new Date(userSelectedDate).getTime();

  const intervalId = setInterval(() => {
    const currentDateTime = new Date().getTime();
    let different = selectedDateTime - currentDateTime;
    console.log(different);

    const daysTimer = document.querySelector('[data-days]');
    const hoursTimer = document.querySelector('[data-hours]');
    const minsTimer = document.querySelector('[data-minutes]');
    const secsTimer = document.querySelector('[data-seconds]');

    function addLeadingZero(value) {
      return value.toString().padStart(2, '0');
    }

    const result = convertMs(different);
    daysTimer.textContent = addLeadingZero(result.days);
    hoursTimer.textContent = addLeadingZero(result.hours);
    minsTimer.textContent = addLeadingZero(result.minutes);
    secsTimer.textContent = addLeadingZero(result.seconds);

    if (different <= 0) {
      clearInterval(intervalId);
      daysTimer.textContent = '00';
      hoursTimer.textContent = '00';
      minsTimer.textContent = '00';
      secsTimer.textContent = '00';

      return;
    }
  }, 1000);
  });

    function convertMs(ms) {
    // Кількість мілісекунд на одиницю часу
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Залишок днів
    const days = Math.floor(ms / day);
    // Залишок годин
    const hours = Math.floor((ms % day) / hour);
    // Залишок хвилин
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Залишок секунд
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  const ms = 24140000;
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}