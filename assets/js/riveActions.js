import { ioSocket } from "../socket/socketController.js";
import { headShake, jump, hp } from "./riveController.js";

let headShakeBtn = document.getElementById("headShake-btn");
let playBtn = document.getElementById("play-btn");

const headShakeFunction = () => {
    headShake.fire();
};

const jumpFunction = () => {
    jump.fire();
};

headShakeBtn.addEventListener("click", () => {
    headShakeFunction();
});

playBtn.addEventListener("click", () => {
    jumpFunction();
});

// Feed Button
let feedButton = document.getElementById("feed-btn");

const feed = () => {
  if (hp.value < 90) {
    hp.value = hp.value + 10;
  } else {
    hp.value = 100;
  }
};

feedButton.addEventListener("click", () => {
  feed();
  console.log(hp.value);
});