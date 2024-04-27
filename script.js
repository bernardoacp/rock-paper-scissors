// function to randomly get the computer choice
function getComputerChoice() {
    
    // generate a random number between 0 and 1
    let number = Math.random();

    // if number is lesser or equal than 1/3 return "rock"
    if (number <= 1/3) return "rock";

    // if number is greater than 2 return "paper"
    if (number > 2/3) return "paper";

    // if number is greater than 1/3 and lesser or equal than 2/3 return "scissors"
    return "scissors";
}

// function to play one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    // make the player selection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    
    // if both players do the same selection, it is a tie
    if (playerSelection == computerSelection) return "It is a tie!";
                                                        
    // compare the selection of both players and return the result of the round
    if (playerSelection == "rock" && computerSelection == "paper")
        return "You Lose! Paper beats Rock";

    if (playerSelection == "rock" && computerSelection == "scissors")
        return "You Win! Rock beats Scissors";

    if (playerSelection == "paper" && computerSelection == "rock")
        return "You Win! Paper beats Rock";

    if (playerSelection == "paper" && computerSelection == "scissors")
        return "You Lose! Scissors beats Paper";

    if (playerSelection == "scissors" && computerSelection == "rock")
        return "You Lose! Rock beats Scissors";

    if (playerSelection == "scissors" && computerSelection == "paper")
        return "You Win! Scissors beats Paper";   
}
 
function handleClick(playerSelection) {    

    if (playerScore == 5 || computerScore == 5)
        return;

    roundResult = playRound(playerSelection, getComputerChoice());
    displayRound.textContent = "Round " + numRound + ": " + roundResult;
    result.appendChild(displayRound);
    numRound++;
    
    if (roundResult.includes("Win"))
        playerScore++;
    else if (roundResult.includes("Lose"))
        computerScore++;

    displayScore(playerScore, computerScore);

    if (playerScore == 5) {
        displayGame.textContent = "You Win!"
        result.appendChild(displayGame);
        return;
    }
    else if (computerScore == 5) {
        displayGame.textContent = "Computer Wins!"
        result.appendChild(displayGame);
        return;
    }
}

function displayScore(playerScore, computerScore) {
    scoreTitle.textContent = "Score";
    scoreContent.textContent = "Player: " + playerScore + "    " + "Computer: " + computerScore;
    
    score.appendChild(scoreTitle);
    score.appendChild(scoreContent);
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let scoreTitle = document.createElement("h3");
let scoreContent = document.createElement("p");
let displayRound = document.createElement("p");
let displayGame = document.createElement("h3");

let numRound = 1, playerScore = 0, computerScore = 0;

rock.addEventListener("click", () => handleClick("rock"));
paper.addEventListener("click", () => handleClick("paper"));
scissors.addEventListener("click", () => handleClick("scissors"));