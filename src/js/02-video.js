import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';
let currentTime;

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(CURRENT_TIME_KEY, seconds);
  }, 1000)
);

currentTime = localStorage.getItem(CURRENT_TIME_KEY);
if (!currentTime) {
  currentTime = 0;
}
player.setCurrentTime(currentTime);
