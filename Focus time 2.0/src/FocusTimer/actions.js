import state from "./state.js";
import * as timer from "./timer.js";

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running");

    timer.countDown();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove("running");
    timer.updateDisplay();
}

export function set() {
    console.log("set");
}

export function plusCount() {
    timer.updateSum(5);
    console.log("plus")
}

export function minusCount() {
    timer.updateSub(5);
    console.log("minus")
}

export function toggleMusic() {
    state.isMuted = document.documentElement.classList.toggle("music-on");
}

export function toggleAnimate() {
    state.isAnimate = document.documentElement.classList.toggle("animate-on");
}