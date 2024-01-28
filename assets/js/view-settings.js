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

window.onload = showInitialHomeContent();