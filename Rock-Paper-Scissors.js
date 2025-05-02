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


    const options= ["Rock","Paper","Scissors"];
    let playerScore= 0;
    let computerScore= 0;

    // connecting the html file
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");
    const roundResult = document.getElementById("roundResult");
    const finalResult = document.getElementById("finalResult");


    function getComputerChoice(){
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
      }

      function getWinner(player,computer){

        if (player === computer){
            return "It's a tie!";
        }
        else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
          ) {
            return "Player Wins!";
          } else {
            return "Computer Wins!";
          }
      }
    