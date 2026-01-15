console.log("Hello world");


// write a function that randomly returns "rock", "paper", "scissors" : getComputerChoice

// getComputerChoice function :
/*
    - Functions takes no arg
    - contains an array of choices
    - randomly compute an array index
    - return the value at this index
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    const CHOICES = ['rock', 'paper', 'scissors'];
    const choiceIndex = getRandomInt(3);
    
    return CHOICES[choiceIndex]
}