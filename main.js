'use strict'

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const messageHolder = function (message) {
    document.querySelector('.message').textContent = message;
}

const numHolder = function (number) {
    document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
        messageHolder('!!! its No number');
    } else if (guess === secretNum) {
        messageHolder('correct number!!!!');
        numHolder(secretNum);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '160px';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNum) {
        messageHolder((guess > secretNum) ? 'too high !!!!!!!!' : 'Too low !!!!!!!!!!!');
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = `score : ${score}`;
        } else {
            messageHolder('You lose the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {

    secretNum = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = `score : ${score}`;
    document.querySelector('.number').style.width = '80px';
    numHolder('?');
    document.querySelector('body').style.backgroundColor = '#161616';
    messageHolder('!!! start guessing');
    document.querySelector('.guess').value = '';


})

// train **************************************

// const btnOpen = document.querySelectorAll('.open-modal');
// const modal = document.querySelector('.modal');
// const btnClose = document.querySelector('.close-modal');
// console.log(btnOpen);

// const openModal = function () {
//     modal.classList.remove('hidden');
// }

// const closeModal = function () {
//     modal.classList.add('hidden');
// }

// for (let i = 0; i < btnOpen.length; i++)
//     btnOpen[i].addEventListener('click', openModal);


// btnClose.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// })


 