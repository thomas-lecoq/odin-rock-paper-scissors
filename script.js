// track the game score
let score = {"computerScore": 0, "humanScore": 0};

// compute random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Calculates the machine choice.
function getComputerChoice() {
    const CHOICES = ['rock', 'paper', 'scissors'];
    const choiceIndex = getRandomInt(3);
    
    return CHOICES[choiceIndex]
}

// Calculates the human choice.
function getHumanChoice() {
    const CHOICES = {"1": 'rock', "2": 'paper', "3": 'scissors'};

    let choiceIndex;
    let continueChoiceLoop = true;

    while (continueChoiceLoop === true) {
        choiceIndex = prompt("1- rock, 2- paper, 3-scissors: make your selection (type 1, 2 or 3)");

        if (choiceIndex in CHOICES){
            continueChoiceLoop = false;
        } else {
            console.log("Please select an available option (1, 2, 3).");
        }
    }
    return CHOICES[choiceIndex]
}

// plays a single round
function playRound(computerChoice=getComputerChoice(), humanChoice=getHumanChoice()) {

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
    
    return roundWinner
}

// play the whole game with a predefined number of 5 rounds
function playGame(numberOfRound=5) {

    let roundWinner; 
    let gameWinner;

    console.log(`Welcome to rock, paper, scissors game, let\s go for ${numberOfRound} rounds !`)
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

    scoreMessage = `After ${numberOfRound} rounds: Computer score: ${score['computerScore'] }, Your score ${score['humanScore']}.`;
    winnerMessage = `${gameWinner} won !`;

    return console.log(scoreMessage + ' ' + winnerMessage)
}

// run the game in console
playGame()