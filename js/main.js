import { playButtonFeedback } from './menu-animation.js';
import { setGameCommand, setScoreCounter} from './game-command.js';

const startButton = document.querySelector('.game-button-start');

// when start button is clicked
startButton.addEventListener('click', () => {
    playButtonFeedback('gameStart', startButton);
    setGameCommand();
    setScoreCounter();
});
