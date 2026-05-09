import { playRound } from "./game-logic.js";

function setGameCommand() {
    const buttonClass = 'game-button';
    const containerClass = 'game-buttons-container';
    const choices = ['rock', 'paper', 'scissors'];
    const container = document.querySelector(`.${containerClass}`);
    const existingButtons = container.querySelectorAll(`.${buttonClass}`)
    
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


function setScoreCounter() {
    // create a generic score containers with a title and value
    const gameControlsContainerClass = 'game-controls-container';
    const scoreContainerClass = 'game-score-container';
    const scoreCounterNameClass = 'game-score-counter-name';
    const scoreCounterValueClass = 'game-score-counter-value';
    const gameControlsContainer = document.querySelector(`.${gameControlsContainerClass}`);


    // if score containers already exists, reset them
    const existingScoreCounterValues = document.querySelectorAll(`.${scoreCounterValueClass}`)
    if (existingScoreCounterValues.length > 0) {
        existingScoreCounterValues.forEach(scoreValues => {
            scoreValues.textContent = 0;
        });
        return;
    }

    const genericScoreContainer = document.createElement('div');
    genericScoreContainer.classList.add(scoreContainerClass);

    const scoreCounterName = document.createElement('p');
    scoreCounterName.classList.add(scoreCounterNameClass);

    const scoreCounterValue = document.createElement('p');
    scoreCounterValue.classList.add(scoreCounterValueClass);

    // append name & score value to a container
    genericScoreContainer.append(scoreCounterName, scoreCounterValue);

    // setting independent score containers and init their title and value
    const contenderArr = ['player', 'computer'];
    contenderArr.forEach(contender => {
        const specificScoreContainer = genericScoreContainer.cloneNode(true);
        specificScoreContainer.classList.add(contender);
        const specificScoreCounterName = specificScoreContainer.querySelector(`.${scoreCounterNameClass}`);
        const specificScoreCounterValue = specificScoreContainer.querySelector(`.${scoreCounterValueClass}`);

        // init score to zero for all contender 
        specificScoreCounterName.textContent = `${contender} score`;
        specificScoreCounterValue.textContent = 0;

        // if specific score container is player : set it to left part of screen, else set it to right
        switch (contender) {
            case 'player': 
            gameControlsContainer.before(specificScoreContainer);
            break;
            case 'computer': 
            gameControlsContainer.after(specificScoreContainer);
            break;
        }
    });
}

export { setGameCommand, setScoreCounter };