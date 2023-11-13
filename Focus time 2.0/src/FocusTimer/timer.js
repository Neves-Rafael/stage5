import state from "./state.js";
import * as elements from "./elements.js";
import { reset } from "./actions.js";

let minutes = Number(elements.minutes.textContent);
let seconds = Number(elements.seconds.textContent);

export function countDown() {
  if (state.isRunning === false) return;

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();
    return;
  }

  updateDisplay(minutes, seconds);
  setTimeout(() => countDown(), 1000);

  console.log("1");
}

export function updateSum(sum) {
  minutes += sum;
  if (minutes > 60) {
    minutes = 60;
    seconds = 0;
  }

  updateDisplay(minutes, seconds);
}

export function updateSub(sub) {
  minutes -= sub;
  if (minutes < 0) {
    seconds = 0;
    minutes = 0;
    reset();
    seconds = state.seconds;
    minutes = state.minutes;
  }
  updateDisplay(minutes, seconds);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}
