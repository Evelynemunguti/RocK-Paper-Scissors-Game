//We create a function that will randomly return either 'rock', 'paper', or 'scissors'.
//
console.log("Hello Eve,Lets play a game");

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