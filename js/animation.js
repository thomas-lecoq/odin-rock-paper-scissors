const sounds = {
    startGame: new Audio('sounds/start.mp3')
};

function playSound(name) {
    sounds[name].currentTime = 0;
    sounds[name].play();
}

function shakeAndBlink(element) {
    element.classList.add('blinking', 'shaking');
    element.addEventListener('animationend', function handler(e) {
        if (e.animationName === 'shake') {
            element.classList.remove('blinking', 'shaking');
            element.removeEventListener('animationend', handler);
        }
    });
}

export{ playSound, shakeAndBlink }