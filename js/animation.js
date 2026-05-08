const sounds = {
    gameStart: new Audio('sounds/start.mp3')
};

function playSound(name) {
    sounds[name].currentTime = 0;
    sounds[name].play();
}

function animateButton(element) {
    element.classList.add('blinking', 'shaking');
    element.addEventListener('animationend', function handler(e) {
        if (e.animationName === 'shake') {
            element.classList.remove('blinking', 'shaking');
            element.removeEventListener('animationend', handler);
        }
    });
}

function displayGameCommand() {
    const buttonClass = 'game-button';
    const choices = ['rock', 'paper', 'scissors'];
    const container = document.querySelector('.game-buttons-container');
    const existingButtons = container.querySelectorAll(buttonClass)
    
    // if buttons already exists, do nothing
    if (existingButtons.length > 0) return;

    // clear existing content of .game-buttons-container and add new content
    container.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add(buttonClass);
        button.textContent = choice;
        container.appendChild(button)
    });
};

export{ playSound, animateButton, displayGameCommand }