function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Calculates the machine choice.
function getComputerChoice(){
    const CHOICES = ['rock', 'paper', 'scissors'];
    const choiceIndex = getRandomInt(3);
    
    return CHOICES[choiceIndex]
}

// Calculates the human choice.
function getHumanChoice(){
    const CHOICES = {"1": 'rock', "2": 'paper', "3": 'scissors'};

    let continueChoiceLoop = true;
    
    while (continueChoiceLoop === true) {
        let choiceIndex = prompt("1- rock, 2- paper, 3-scissors: make your selection (type 1, 2 or 3");

        if (choiceIndex in CHOICES){
            continueChoiceLoop = false;
        } else {
            console.log("Please select an available option (1, 2, 3).");
        }
    }
    return CHOICES[choiceIndex]
}

console.log(getHumanChoice())