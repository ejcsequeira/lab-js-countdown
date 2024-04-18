const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
//document.getElementById("myBtn").addEventListener("click", displayDate);
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {
  startCountdown();
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  startButton.disabled = true;

  let remainingTime = 10;
  const countDownInterval = setInterval(() => {
    remainingTime--;
    document.getElementById("time").textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(countDownInterval);
      startButton.disabled = false;

      showToast();
      remainingTime = 10;
      document.getElementById("time").textContent = remainingTime;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toastElement = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");
  toastElement.classList.add("show");
  toastMessage.textContent = message;
  const timeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
}

