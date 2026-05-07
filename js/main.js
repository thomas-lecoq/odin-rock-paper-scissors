import { playSound, shakeAndBlink } from './animation.js';

const startButton = document.querySelector('.general-buttons');

startButton.addEventListener('click', () => {
    playSound('startGame');
    shakeAndBlink(startButton);
});
