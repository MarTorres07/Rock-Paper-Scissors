


function computerPlay(){
let choices = ["rock", "paper", "scissors"];
let computerSelection = choices[Math.floor(Math.random()* 3)];
console.log(`The computer choose: ${computerSelection}.`);
return computerSelection;

}

function playerPlay() {
    const playerSelection = prompt('Choose your Weapon: Paper, Rock, Scissors');

    return playerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection){
let winner= 'none';
if(playerSelection === computerSelection){
    console.log("It's a Draw!");
    winner='none';
} else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("You lose, Paper beats Rock")
    winner='Computer';
} else if (playerSelection === "rock"  && computerSelection === "scissors"){
    console.log("You win!")
    winner='Player';
} else if (playerSelection === "paper"  && computerSelection === "rock"){
    console.log("You win!")
    winner='Player';
} else if (playerSelection === "scissors"  && computerSelection === "rock"){
    console.log("You lose, Rock beats Scissors.")
    winner='Computer';
} else if (playerSelection === "scissors"  && computerSelection === "paper"){
    console.log("You win!")
    winner='Player';
} else if (playerSelection === "paper"  &&  computerSelection ==="scissors"){
    console.log("You lose, Scissors beats paper.")
    winner='Computer';
}
return winner;
}



function game(){
    let playerScore= 0;
    let computerScore=0;
    
    for (let i=0; i < 5; i++) {
    let roundWinner = playRound(playerPlay(), computerPlay());
    if( roundWinner === 'Player'){
        playerScore++;
    } else if (roundWinner === 'Computer'){
        computerScore++;
    } 
    
    }
    console.log(`The final score is: Player: ${playerScore}, Computer: ${computerScore}.`);
    
    if (playerScore > computerScore){
        console.log("Congratulations, you Win the game!")
    } else if (computerScore > playerScore){
        console.log("Game Over...")
    } else if ( playerScore === computerScore){
        console.log("The game game is a draw!")
    }
    }

    game();
    console.log("Thank you for playing, do you want to play again?")