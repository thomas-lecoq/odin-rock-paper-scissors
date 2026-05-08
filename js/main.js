import { playButtonFeedback } from './menu-animation.js';
import { setGameCommand } from './game-command.js';

const startButton = document.querySelector('.game-button-start');

startButton.addEventListener('click', () => {
    playButtonFeedback('gameStart', startButton);
    setGameCommand();
});
