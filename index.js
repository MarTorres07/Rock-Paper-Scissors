
let computerScore=0
let playerScore=0


function playerPlay(){
    let playerChoice = prompt("Make your choice: 'rock', 'paper', or 'scissors'?");
    playerChoice=playerChoice.toLowerCase();
    return playerChoice;
}

function computerPlay(){
let computerChoice = ["rock", "paper", "scissors"];
let randomComputerChoice = computerChoice[Math.floor(Math.random()* computerChoice.length)]
return randomComputerChoice
}

function playRound(playerSelection, computerSelection){
    playerSelection=playerPlay();
    computerSelection=computerPlay();

if(playerSelection === computerSelection){
    console.log("Draw");
} else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("You lose, Paper beats Rock")
    computerScore++
} else if (playerSelection === "rock"  && computerSelection === "scissors"){
    console.log("You win!")
    playerScore++
} else if (playerSelection === "paper"  && computerSelection === "rock"){
    console.log("You win!")
    playerScore++
} else if (playerSelection === "scissors"  && computerSelection === "rock"){
    console.log("You lose, Rock beats Scissors.")
    computerScore++
} else if (playerSelection === "scissors"  && computerSelection === "paper"){
    console.log("You win!")
    playerScore++
} else if (playerSelection === "paper"  &&  computerSelection ==="scissors"){
    console.log("You lose, Scissors beats paper.")
    computerScore++
}
}

function game(){
    for (let i=0; i < 5; i++){
    playRound(playerSelection, computerSelection);
    console.log(`The current score is: Player - ${playerScore}, Computer - ${computerScore}.`)

    if (playerScore > computerScore){
    console.log("Congratulations, you Won the game! want to play again?")
    } else if (computerScore > playerScore){
        console.log("Game Over... eant to play again?")
    } else if ( playerScore === computerScore){
        console.log("Is a draw! want to play again?")
    }
    }
    
}