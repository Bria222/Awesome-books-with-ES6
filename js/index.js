/* eslint-disable linebreak-style */
const textWrapper = document.querySelector('.ml2');
import { DateTime } from '../modules/luxon.js';
import loadData from '../modules/loadeData.js';
// get date and time
export const getTime = () => {
  const dt = DateTime.now();
  const time = document.getElementById('time');
  time.innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};

loadData();

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// eslint-disable-next-line no-undef
anime.timeline({ loop: true })
  .add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 950,
    delay: (el, i) => 70 * i,
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });