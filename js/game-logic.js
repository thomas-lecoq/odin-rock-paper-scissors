let score = {"computerScore": 0, "humanScore": 0};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getComputerChoice() {
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


    /* logic to add here
    each click on a button plays a round -> ok done
    when a round is played : main content should show what play was done per contender on a card
    the contender who lost should be displayed in grey, the winner in green
    the number of round should be tracked (5 round each time)
    once the number of round reach 5 : display the winner
    any new click on a choice restart the game
    playgame function may need to be rewrite
    */

    return roundWinner
}

export function playGame(numberOfRound=5) {

    let roundWinner;
    let gameWinner;
    for (let finishedRounds = 0; finishedRounds < numberOfRound; finishedRounds++) {
        roundWinner = playRound();

        switch(roundWinner) {
            case 'Tie':
                break;
            case 'Computer':
                score["computerScore"]++;
                break;
            case 'Human':
                score["humanScore"]++;
                break;
        }
    }

    if (score['computerScore'] === score['humanScore']) {
        gameWinner = 'Nobody';
    } else if (score['computerScore'] > score['humanScore']) {
        gameWinner = 'Computer';
    } else {
        gameWinner = 'You';
    }

    const scoreMessage = `After ${numberOfRound} rounds: Computer score: ${score['computerScore'] }, Your score ${score['humanScore']}.`;
    const winnerMessage = `${gameWinner} won !`;

    return console.log(scoreMessage + ' ' + winnerMessage)
}
