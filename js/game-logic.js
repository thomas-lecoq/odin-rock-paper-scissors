import { clearGameContent, resetDisplayedScores, incrementDisplayedScore } from "./game-command.js";

let score = {"computerScore": 0, "humanScore": 0};
let roundsPlayed = 0;
const totalRounds = 5;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choiceIndex = getRandomInt(3);

    return choices[choiceIndex]
}

export function playRound(humanChoice, computerChoice=getComputerChoice()) {

    // define who won this round
    let roundWinner;
    switch(true) {
        case computerChoice === humanChoice:
            roundWinner = 'Tie'
            break;
        case humanChoice === 'rock':
            if (computerChoice === 'paper') {
                roundWinner = 'Computer';
            } else {
                roundWinner = 'Human';
            }
            break;
        case humanChoice === 'paper':
            if (computerChoice === 'scissors') {
                roundWinner = 'Computer';
            } else {
                roundWinner = 'Human';
            }
            break;
        case humanChoice === 'scissors':
            if (computerChoice === 'rock') {
                roundWinner = 'Computer';
            } else {
                roundWinner = 'Human';
            }
            break;
    }

    // display the game content base on who won this round
    const gameContentContainerClass = 'game-content-container';
    const gameContentContainer = document.querySelector(`.${gameContentContainerClass}`);

    const roundChoicesContainerClass = 'round-choices-container';
    const roundChoicesContainer = document.createElement('div');
    roundChoicesContainer.classList.add(roundChoicesContainerClass);

    // define a function expression that assign content to card base on contenders plays
    const makeCard = (className, label, value) => {
        const card = document.createElement('div');
        card.classList.add(className);

        const labelEl = document.createElement('p');
        labelEl.classList.add('card-label');
        labelEl.textContent = label;
        card.appendChild(labelEl);

        if (value !== undefined) {
            const valueEl = document.createElement('p');
            valueEl.textContent = value;
            card.appendChild(valueEl);
        }

        return card;
    };

    // Create the card and their content
    const [humanChoiceCard, computerChoiceCard, roundWinnerCard] = [
        ['human-choice-card',    'Player move:',      humanChoice],
        ['computer-choice-card', 'Computer move:', computerChoice],
        ['round-winner-card',    roundWinner == 'Tie' ? 'Tie': `${roundWinner} won`],
    ].map(args => makeCard(...args));


    // append cards div to roundChoicesContainer
    roundChoicesContainer.append(humanChoiceCard, computerChoiceCard, roundWinnerCard);

    // append round container to game content container
    gameContentContainer.appendChild(roundChoicesContainer);

    return roundWinner
}

function resetScores() {
    score.computerScore = 0;
    score.humanScore = 0;
    roundsPlayed = 0;
    resetDisplayedScores();

    return
}

export function handleRound(humanChoice) {

    // reset the game if player keep pressing choices
    if (roundsPlayed >= totalRounds) {
        clearGameContent();
        resetScores();
    }

    // increase scores base on winning contender
    const roundWinner = playRound(humanChoice);
    switch(roundWinner) {
        case 'Computer':
            score.computerScore++;
            incrementDisplayedScore('Computer');
            break;
        case 'Human':
            score.humanScore++;
            incrementDisplayedScore('Human');
            break;
    }
    roundsPlayed++;

    // handle endgame and display winner
    const gameWinnerNameClass = 'game-winner-name';
    const gameContentContainerClass = 'game-content-container';

    const gameWinnerName = document.createElement('p');
    gameWinnerName.classList.add(gameWinnerNameClass);
    const gameContentContainer = document.querySelector(`.${gameContentContainerClass}`);

    if (roundsPlayed === totalRounds) {
        let gameWinner;
        if (score.computerScore === score.humanScore) {
            gameWinner = 'Nobody';
        } else if (score.computerScore > score.humanScore) {
            gameWinner = 'Computer';
        } else {
            gameWinner = 'You';
        }
                
        gameWinnerName.textContent = `${gameWinner} won the game !`;
        gameContentContainer.appendChild(gameWinnerName);
    }
}
