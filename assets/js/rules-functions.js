//Import the functions and variables from view-settings.js
import * as ViewSettings from "/assets/js/view-settings.js";

// Function to render the Tic Tac Toe board
const board = document.getElementById("board");

export function renderBoard() {
    board.innerHTML = "";
    boardState.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.innerText = cell;
        board.appendChild(cellElement);
    });
}