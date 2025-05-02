//We create a function that will randomly return either 'rock', 'paper', or 'scissors'.
//
// Rock beats scissors
//Paper beats rock
//Scissors beats paper
//We create a function that will take two parameters, playerSelection and computerSelection
//and will return the result of the game.

// function startGame(){
    //This function will start the game
    //We will use the prompt function to get the user input
    //We will use the console.log function to display the result of the game
    //We will use the alert function to display the result of the game
    //We will use the confirm function to ask the user if they want to play again


    const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Get elements from HTML
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const roundResult = document.getElementById("roundResult");
const finalResult = document.getElementById("finalResult");

// Generate computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Decide who wins
function getWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Player Wins!";
  } else {
    return "Computer Wins!";
  }
}

// Main game logic
function playRound(playerSelection) {
  if (playerScore >= 5 || computerScore >= 5) return;

  const computerSelection = getComputerChoice();
  const result = getWinner(playerSelection, computerSelection);

  if (result === "Player Wins!") {
    playerScore++;
    roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (result === "Computer Wins!") {
    computerScore++;
    roundResult.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}`;
  } else {
    roundResult.textContent = "It's a tie!";
  }

  // Update scores on screen
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  // Check if anyone won the game
  if (playerScore === 5) {
    finalResult.textContent = "🎉 You are the winner!";
  } else if (computerScore === 5) {
    finalResult.textContent = "😢 Computer wins the game!";
  }
}

// Add event listeners to buttons
document.getElementById("Rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("Paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("Scissors").addEventListener("click", () => playRound("Scissors"));
