const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name : '',
        symbol : 'X'
    },
    {
        name : '',
        symbol : 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfig = document.getElementById('cancel-config-btn');
const startNewGameBtn = document.getElementById('start');
const gameFieldElements = document.querySelectorAll('#game-board li');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfig.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}