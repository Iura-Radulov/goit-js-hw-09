import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// let deltaTime = 0;
const startBtn = document.querySelector("button[data-start]")
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
     const valueSelectedDate = selectedDates[0].getTime();
      if (valueSelectedDate < Date.now()) {
          window.alert("Please choose a date in the future");
      }
      else {
  startBtn.disabled = false;
      };
      const deltaTime = valueSelectedDate - Date.now();
      console.log(deltaTime);
      return deltaTime;
      
  },
};


flatpickr("#datetime-picker", options);
// console.log(options.defaultDate.getTime());
// console.log(options.onClose());
startBtn.addEventListener("click", onStartBtnClick);
// console.log(deltaTime);

function onStartBtnClick() {
    

    setInterval(() => {
        const currentTime = Date.now();

        const valueSelectedDates = options.defaultDate.getTime();
        // console.log(options.onClose());
        // console.log(valueSelectedDates - currentTime);
    }, 1000)
}


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