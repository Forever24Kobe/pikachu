import string from "./src/css";
let n = 1;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);
let time = 50;

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  demo.innerText = string.substring(0, n);
  demo2.innerHTML = string.substring(0, n);
  demo.scrollTop = demo.scrollHeight;
};

let id = setInterval(() => {
  run();
}, time);

const play = () => {
  id = setInterval(() => {
    run();
  }, time);
};
const pause = () => {
  window.clearInterval(id);
};
const start = () => {
  pause();
  play();
};
const slow = () => {
  time = 100;
  start();
};
const normal = () => {
  time = 20;
  start();
};
const fast = () => {
  time = 1;
  start();
};

btnPause.onclick = pause;
btnPlay.onclick = start;
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
