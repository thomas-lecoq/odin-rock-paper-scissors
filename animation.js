const button = document.querySelector('.general-buttons');

const sounds = {
    startGame: new Audio('sounds/start.mp3')
}

function playSound(name) {
    sounds[name].currentTime = 0;
    sounds[name].play()
}

// blinking & shaking events
button.addEventListener('click', () => {
    playSound('startGame');
    button.classList.add('blinking', 'shaking');
});

button.addEventListener('animationend', (e) => {
    if (e.animationName === 'shake') {
        button.classList.remove('blinking', 'shaking');
    }
});