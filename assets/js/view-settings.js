// Import functions and variables from view-settings.js
import * as RulesFunctions from "/assets/js/rules-functions.js";

// Elements for initial game content
export const pageRender = document.getElementById("main-container");
export const howToPlay = document.getElementById("how-to-play");
export const modeSelection = document.getElementById("mode-selection");
export const scoreContent = document.getElementById("score-content");
export const boardContent = document.getElementById("board-content");
export const contactForm = document.getElementById("contact-form");
export const startButton = document.getElementById("start-button");
export const startMessages = document.getElementById("start-m");
export const aboutTheGame = document.getElementById("about-the-game");
export const gameHistory = document.getElementById('game-history');

// Function to show the initial game content
export function showInitialHomeContent() {
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
export function showContact() {
    howToPlay.style.display = "none";
    aboutTheGame.style.display = "none";
    modeSelection.style.display = "none";
    scoreContent.style.display = "none";
    boardContent.style.display = "none";
    contactForm.style.display = "block"; // Show the contact form
    gameHistory.style.display = "none";
}

// Function to show the play game content
export function showPlay() {
    showInitialHomeContent();
    initialGameBoardRunder();
    aboutTheGame.style.display = "none";
    howToPlay.style.display = "block";
    startMessages.style.display = "block";
    contactForm.style.display = "none"; // Hide the contact form
    gameHistory.style.display = "none";
}

// Function to configure initial board content
export const onePlayerButton = document.getElementById("one-player");
export const twoPlayersButton = document.getElementById("two-players");

export function initialGameBoardRunder() {
    modeSelection.style.display = "flex";
    modeSelection.style.justifyContent = "center";
    onePlayerButton.style.display = "none";
    twoPlayersButton.style.display = "none";
    scoreContent.style.display = "none";
    boardContent.style.display = "none";
}

// Function to determine screen size
export function init() {
    let mQuery = window.matchMedia("(min-width: 900px)");
    runningGameBoardRunder();

    if (mQuery.matches) {
        runningGameBoardRunder();
    } else {
        runningGameBoardRunderMobile();
    }
}

// Styles for large-screen devices
export const gameContent = document.getElementById("game-content");
export const resetButton = document.getElementById("reset-button");
export const restartButton = document.getElementById("restart-button");
export const buttonsContainer = document.getElementById("buttons-container");

// Styling function for the game board display
export function runningGameBoardRunder() {
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
export function runningGameBoardRunderMobile() {
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
export const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
    showInitialHomeContent();   
});

// Event listener for the "Contact Us" button
export const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", () => {
    showInitialHomeContent();
    showContact();   
});

// Event listener for the "Play" button (added play button)
export const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
    pageRender.style.display = "block";
    howToPlay.style.width = "100%";
    gameContent.style.width = "auto";
    showPlay();
    RulesFunctions.restartGame();
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
    RulesFunctions.resetGame();
    init();
    startMessages.innerHTML = "Click start game to play";
    startMessages.style.display = "none";
});

// Event listener for the "Two Players" button
twoPlayersButton.addEventListener("click", () => {
    RulesFunctions.resetGame();
    init();
    startMessages.innerHTML = "Click start game to play";
    startMessages.style.display = "none";
});