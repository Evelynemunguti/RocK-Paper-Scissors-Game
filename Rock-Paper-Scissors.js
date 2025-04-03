//We create a function that will randomly return either 'rock', 'paper', or 'scissors'.
//
// Rock beats scissors
//Paper beats rock
//Scissors beats paper
//We create a function that will take two parameters, playerSelection and computerSelection
//and will return the result of the game.


console.log("Hello Eve!");

//this are all the choices we have
const options=["Rock","Paper","Scissors"];

//this function will represent the computer choice
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
getComputerChoice();

function checkWinner(playerselection,computerselection){
    if(playerselection===computerselection){
        return "It's a tie!";
    }
if(
(playerselection==="Rock" && computerselection==="Scissors")|| 
(playerselection==="Paper" && computerselection==="Rock")||
(playerselection==="Scissors" && computerselection==="Paper")
)
{
      return "Player Wins!";
}
    else{return "Computer Wins!";
}
}

const playerselection = "Paper"; // You can get this from user input
const computerselection = getComputerChoice();

// console.log(`You chose: ${playerselection}`);
// console.log(`Computer chose: ${computerselection}`);
// console.log(checkWinner(playerselection, computerselection)); 



function playRound(playerselection, computerselection){
    const result = checkWinner(playerselection, computerselection);
    if (result =="It's a tie!"){
        return "It's a tie!";
    }

    else if(result=="Player Wins!"){
        return `Player Wins! ${playerselection} beats ${computerselection}`;
    }
    else{
        return `Computer Wins! ${computerselection} beats ${playerselection}`;
    }
    
}

function getPlayerChoice(){

let validatedInput = false;
while(validatedInput == false){
 const choice = prompt("Please enter your choice (Rock, Paper or Scissors): ");
   if (choice == null){
       continue;
}   
const choiceInLowerCase = choice.toLowerCase();
if (options.includes(choiceInLowerCase)){
validatedInput = true;
 return choiceInLowerCase;
}
 }
  }    


function playGame(){

    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome to the game");
    for(let i=0; i<5; i++){
        const playerselection = getPlayerChoice(); // You can get this from user input
        const computerselection = getComputerChoice();
        playRound(playerselection, computerselection);
        console.log(playRound(playerselection, computerselection));
        if(checkWinner(playerselection, computerselection) == "Player Wins!"){
            playerScore++;
        }
        else if(checkWinner(playerselection, computerselection) == "Computer Wins!"){
            computerScore++;
        }
    }

console.log("Game Over");
if(playerScore > computerScore){
    console.log("Player Wins the game!");
}
else if(playerScore < computerScore){
    console.log("Computer Wins the game!");
}
else{
    console.log("It's a tie!");
}
}

playGame();