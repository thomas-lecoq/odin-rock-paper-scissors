import { playRound } from "./game-logic.js";

function setGameCommand() {
    const buttonClass = 'game-button';
    const choices = ['rock', 'paper', 'scissors'];
    const container = document.querySelector('.game-buttons-container');
    const existingButtons = container.querySelectorAll(buttonClass)
    
    // if buttons already exists, do nothing
    if (existingButtons.length > 0) return;

    // clear existing content of .game-buttons-container and add buttons with event listeners
    container.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add(buttonClass);
        button.textContent = choice;
        button.addEventListener('click', () => playRound(choice));
        container.appendChild(button)
    });
};

export { setGameCommand };