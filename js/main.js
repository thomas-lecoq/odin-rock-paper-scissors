import { playSound, animateButton, displayGameCommand } from './animation.js';

const startButton = document.querySelector('.game-button-start');

startButton.addEventListener('click', () => {
    playSound('gameStart');
    animateButton(startButton);
    displayGameCommand();
});
