import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const current_time = 'videoplayer-current-time';

if (localStorage.getItem(current_time)) {
    player.setCurrentTime(localStorage.getItem(current_time));
}

const play = e => {
    player
        .getCurrentTime()
        .then(function (seconds) {
            localStorage.setItem(current_time, seconds);
        })
        .catch(function (error) {
            console.log(error.name);
            console.log(error.message);
        });
};

player.on(
  'timeupdate',
  throttle(play, 1000)
);
