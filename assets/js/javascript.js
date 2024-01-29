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
let onePlayerMode = false; // Flag to check single player

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
   restartGame();
});

// Event listener for the "Contact Us" button
const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", () => {
   showInitialHomeContent();
   showContent(); 
   restartGame();  
});

// Event listener for the "Play" button (added play button)
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
   pageRender.style.display = "block";
   howToPlay.style.width = "100%";
   gameContent.style.width = "auto";
   showPlay();   
   resetGame();
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
   resetGame();  
   init();
   startMessages.innerHTML = "Click start game to play";
   startMessages.style.display = "none";
});


// Event listener for the "Reset Game" button
resetButton.addEventListener("click", resetGame);

// Event listener for the "Restart Game" button
restartButton.addEventListener("click", restartGame);


//Rulls function for the game 

let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let score = { X: 0, O: 0 };
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

// Function to check if there is a winner
function checkWinner() {
   const winPatterns = [
       [0, 1, 2], [3, 4, 5], [6, 7, 8],
       [0, 3, 6], [1, 4, 7], [2, 5, 8],
       [0, 4, 8], [2, 4, 6]
   ];

   for (const pattern of winPatterns) {
       const [a, b, c] = pattern;
       if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
           if (boardState[a] === "X") {
               message.innerText = "Player X wins!";
               score["X"]++;
           } else {
               message.innerText = onePlayerMode ? "Computer wins!" : "Player O wins!";
               score["O"]++;
           }
           updateScore();
           
           // Set gameWon to true
           gameWon = true;
           return true;
       }
   }

   if (!boardState.includes("")) {
       message.innerText = "It's a draw!";
       return true;
   }

   return false;
}

// Function to update the score display
const scoreX = document.getElementById("score-x");
const scoreO = document.getElementById("score-o");

// Function to update the score display
function updateScore() {
    scoreX.innerText = score["X"];
    scoreO.innerText = score["O"];
}

// Function to restart the game and reset the valuse
function restartGame() {
   scoreX.innerText = score["X"] = 0;
   scoreO.innerText = score["O"] = 0;
   resetGame();   
}

// Function to reset the game board
function resetGame() {
   boardState = ["", "", "", "", "", "", "", "", ""];
   currentPlayer = "X";
   message.innerText = "";

   // Reset gameWon to false
   gameWon = false;

   renderBoard();
   if (onePlayerMode && currentPlayer === "O") {
       computerMove();
   }
}