const audio = new Audio('./resources/sound.mp3')

const buttons = document.querySelectorAll('.button');

const removeActive = () => {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
}

const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    removeActive();
    playButton.classList.add('active');
    audio.play();
});

const pauseButton = document.querySelector('.pause-button');
pauseButton.addEventListener('click', () => {
    removeActive();
    pauseButton.classList.add('active');
    audio.pause();
});

const stopButton = document.querySelector('.stop-button');
stopButton.addEventListener('click', () => {
    removeActive();
    stopButton.classList.add('active');
    audio.pause();
    audio.currentTime = 0;
});