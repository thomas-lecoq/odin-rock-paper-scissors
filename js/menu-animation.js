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

function playButtonFeedback(name, element) {
    playSound(name);
    animateButton(element);
}

export{ playButtonFeedback }