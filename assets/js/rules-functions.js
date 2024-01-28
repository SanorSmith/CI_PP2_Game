

let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameWon = false;

// Function to handle cell click
function handleCellClick(index) {
    if (boardState[index] === "" && !gameWon) {
        boardState[index] = currentPlayer;
        renderBoard();         
    }
}

// Function to render the Tic Tac Toe board
const board = document.getElementById("board");

export function renderBoard() {
    board.innerHTML = "";
    boardState.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.innerText = cell;
        cellElement.addEventListener("click", () => handleCellClick(index));
        board.appendChild(cellElement);
    });
}