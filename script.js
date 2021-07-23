

window.onload = start;

let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;

function start(){
    const gameText = document.querySelector("#gameText");
    const button = document.querySelector("#submit");
    gameText.innerHTML = "Choose:<br>1. Rock<br>2. Paper<br>3. Scissors";
    const scoreText = document.querySelector("#scoreText");
    scoreText.innerHTML = `Player: ${playerScore} <br> Computer: ${computerScore} <br> Total rounds: ${totalRounds}`;

    button.addEventListener("click", submitAnswer);

}


function computerPlay() {
    let n = Math.floor(Math.random() * 3);
    if (n < 1) {
        return "rock";
    } else if (n < 2) {
        return "paper";
    } else if (n < 3) {
        return "scissors";
    } else {
        return null;
    }
}


function submitAnswer() {
    removeErrors();
    const computerSelection = computerPlay();
    const playerInput = document.querySelector("#playerInput");
    const playerAnswer = playerInput.value.toLowerCase();
    playRound(playerAnswer, computerSelection);
}


function playRound(playerSelection, computerSelection) {
    const roundText = document.querySelector("#roundText");

    if(playerSelection == computerSelection){
        roundText.innerHTML = `No winner: ${playerSelection} is the same as ${computerSelection}`;
    }else if(playerSelection=="rock"){
        if(computerSelection == "scissors"){
            roundText.innerHTML = `You Win!: ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }else{
            roundText.innerHTML = `You Lose!: ${playerSelection} loses to ${computerSelection}`;
            computerScore++;
        }
    }else if(playerSelection=="paper"){
        if (computerSelection == "rock") {
            roundText.innerHTML = `You Win!: ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        } else {
            roundText.innerHTML = `You Lose!: ${playerSelection} loses to ${computerSelection}`;
            computerScore++;
        }
    }else if(playerSelection=="scissors"){
        if (computerSelection == "paper") {
            roundText.innerHTML = `You Win!: ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        } else {
            roundText.innerHTML = `You Lose!: ${playerSelection} loses to ${computerSelection}`;
            computerScore++;
        }
    }else{
        wrongInputError(playerSelection);
    }
    updateScore();
    console.log(playerSelection);
    console.log(computerSelection);
}

function wrongInputError(e){
    totalRounds--;
    errorField = document.querySelector("#error");
    errorField.innerHTML= "Invalid input: \"" + e + "\". Please type rock, paper or scissors";
}

function removeErrors(){
    document.querySelector("#error").innerHTML="";

}

function updateScore(){
    totalRounds++;
    const scoreText = document.querySelector("#scoreText");
    scoreText.innerHTML= `Player: ${playerScore} <br> Computer: ${computerScore} <br> Total rounds: ${totalRounds}`;
}