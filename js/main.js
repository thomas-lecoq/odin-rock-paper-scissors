import { playButtonFeedback } from './menu-animation.js';
import { setGameCommand, setScoreCounter, clearGameContent} from './game-command.js';

const startButton = document.querySelector('.game-button-start');

// when start button is clicked
startButton.addEventListener('click', () => {
    clearGameContent();
    playButtonFeedback('gameStart', startButton);
    setGameCommand();
    setScoreCounter();
});
