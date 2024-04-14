// function to randomly get the computer choice
function getCompuerChoice() {
    
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

    // if no condition is satisfied, it means that the player gave an incorrect input
    return "Invalid play, try again"
}

console.log(playRound("ROCK",getCompuerChoice()));