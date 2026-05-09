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

    if (roundWinner === 'Tie') {
        console.log(`You said ${humanChoice}, computer said ${computerChoice} - it\'s a tie !`);
    } else {
        console.log(`You said ${humanChoice}, computer said ${computerChoice} - ${roundWinner} win this round !`);

    }

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
