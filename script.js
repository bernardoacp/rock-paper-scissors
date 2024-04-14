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

    return "Invalid play, try again";
}

// function to play a 5-round game of Rock Paper Scissors
function playGame() {

    // declare variables for player and computer selecion
    let playerSelection, roundResult;
    
    // initialize player and computer score
    let playerScore = 0, computerScore = 0;

    // loop through the five rounds
    for (let i = 1; i <= 5; i++) {

        // prompt the user to make a play
        playerSelection = prompt("Make your play:");

        // calculate the round result
        roundResult = playRound(playerSelection, getComputerChoice())

        // if the player wins, update their score
        if (roundResult.includes("You Win")) playerScore++;
            
        // if the computer wins, update their score
        else if (roundResult.includes("You Lose")) computerScore++;

        // display the round result
        console.log("Round " + i + ": " + roundResult);

        // if the play is invalid, replay the round
        if (roundResult.includes("Invalid")) i--;
    }

    // compare the scores and define the winner
    if (playerScore == computerScore)
        return "It is a tie!"
    
    if (playerScore > computerScore)
        return "You Win!";

    return "Computer Wins!";
}

// display the game result
console.log(playGame());