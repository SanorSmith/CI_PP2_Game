// View setting code 

// Elements for initial game content
const pageRender = document.getElementById("main-container");
const howToPlay = document.getElementById("how-to-play");
const modeSelection = document.getElementById("mode-selection");
const scoreContent = document.getElementById("score-content");
const boardContent = document.getElementById("board-content");
const contactForm = document.getElementById("contact-form");
const startButton = document.getElementById("start-button");
const startMessages = document.getElementById("start-m");
const aboutTheGame = document.getElementById("about-the-game");
const gameHistory = document.getElementById('game-history');

// Function to show the initial game content
function showInitialHomeContent() {
   pageRender.style.display = "block";
   howToPlay.style.display = "none";
   aboutTheGame.style.display = "block";
   modeSelection.style.display = "none";
   scoreContent.style.display = "none";
   boardContent.style.display = "none";
   contactForm.style.display = "none";
   gameHistory.style.display = "block";
   startButton.style.display = "block";
   startMessages.style.display = "none";
}

// Function to hide the game content
function showContent() {
   howToPlay.style.display = "none";
   aboutTheGame.style.display = "none";
   modeSelection.style.display = "none";
   scoreContent.style.display = "none";
   boardContent.style.display = "none";
   contactForm.style.display = "block"; // Show the contact form
   gameHistory.style.display = "none";
}

// Function to show the play game content
function showPlay() {
   showInitialHomeContent();
   initialGameBoardRunder();
   aboutTheGame.style.display = "none";
   howToPlay.style.display = "block";
   startMessages.style.display = "block";
   contactForm.style.display = "none"; // Hide the contact form
   gameHistory.style.display = "none";
}

// Function to configure initial board content
const onePlayerButton = document.getElementById("one-player");
const twoPlayersButton = document.getElementById("two-players");

function initialGameBoardRunder() {
   modeSelection.style.display = "flex";
   modeSelection.style.justifyContent = "center";
   onePlayerButton.style.display = "none";
   twoPlayersButton.style.display = "none";
   scoreContent.style.display = "none";
   boardContent.style.display = "none";
}

// Function to determine screen size
function init() {
   let mQuery = window.matchMedia("(min-width: 900px)");
   runningGameBoardRunder();

   if (mQuery.matches) {
       runningGameBoardRunder();
   } else {
       runningGameBoardRunderMobile();
   }
}

// Styles for large-screen devices
const gameContent = document.getElementById("game-content");
const resetButton = document.getElementById("reset-button");
const restartButton = document.getElementById("restart-button");
const buttonsContainer = document.getElementById("buttons-container");

// Styling function for the game board display
function runningGameBoardRunder() {
   gameContent.style.width = "50%";
   pageRender.style.display = "flex";
   pageRender.style.flexDirection = "row";
   howToPlay.style.width = "50%";
   onePlayerButton.style.display = "none";
   twoPlayersButton.style.display = "none";

   // Score board Styles
   scoreContent.style.display = "block";
   // Play Board Styles
   boardContent.style.display = "flex";
   boardContent.style.justifyContent = "center";

   // Start-Restart Buttons styles
   buttonsContainer.style.display = "flex";
   buttonsContainer.style.justifyContent = "space-around";
   resetButton.style.width = "7rem";
   resetButton.style.margin = "1rem";
   restartButton.style.width = "7rem";
   restartButton.style.margin = "1rem";
}

// Mobile devices styles
function runningGameBoardRunderMobile() {
   gameContent.style.width = "100%";
   boardContent.style.flexDirection = "column";
   boardContent.style.justifyContent = "center";
   boardContent.style.width = "100%";
   pageRender.style.display = "block";
   howToPlay.style.width = "100%";
}

// Initial loading for index.html
window.onload = showInitialHomeContent();

// Event listener for the "Home" button
const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
   showInitialHomeContent();
   resetGame();
});

// Event listener for the "Contact Us" button
const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", () => {
   showInitialHomeContent();
   showContent();   
});

// Event listener for the "Play" button (added play button)
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
   pageRender.style.display = "block";
   howToPlay.style.width = "100%";
   gameContent.style.width = "auto";
   showPlay();   
});

// Event listener for the "Start" button
startButton.addEventListener("click", () => {
   startButton.style.display = "none";
   modeSelection.style.display = "flex";
   onePlayerButton.style.display = "block";
   twoPlayersButton.style.display = "block";
   startMessages.innerHTML = "Please select the number of players";
});

// Event listener for the "One Player" button
onePlayerButton.addEventListener("click", () => {
   onePlayerMode = true;
   resetGame();
   init();
   startMessages.innerHTML = "Click start game to play";
   startMessages.style.display = "none";
});

// Event listener for the "Two Players" button
twoPlayersButton.addEventListener("click", () => {
   onePlayerMode = false;   
   init();
   startMessages.innerHTML = "Click start game to play";
   startMessages.style.display = "none";
});

//Rulls function for the game 

let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let onePlayerMode = false;
let gameWon = false;

// Function to handle cell click
function handleCellClick(index) {
    if (boardState[index] === "" && !gameWon) {
        boardState[index] = currentPlayer;
        renderBoard();
        if (!checkWinner()) {
         currentPlayer = currentPlayer === "X" ? "O" : "X";
         if (onePlayerMode && currentPlayer === "O") {
             computerMove();
         }
     }         
    }
}

// Function to render the Tic Tac Toe board
const board = document.getElementById("board");

function renderBoard() {
    board.innerHTML = "";
    boardState.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.innerText = cell;
        cellElement.addEventListener("click", () => handleCellClick(index));
        board.appendChild(cellElement);
    });
}

// Function to make the computer's move
function computerMove() {
   // Create an array of indices for empty cells
   let emptyCells = [];
   for (let i = 0; i < boardState.length; i++) {
       if (boardState[i] === "") {
           emptyCells.push(i);
       }
   }

   // Check if there are any empty cells and make a move
   if (emptyCells.length > 0) {
       let randomIndex = Math.floor(Math.random() * emptyCells.length);
       boardState[emptyCells[randomIndex]] = "O";
       currentPlayer = "X";
       renderBoard();
       checkWinner();
   }
}