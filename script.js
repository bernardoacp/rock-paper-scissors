// getCompuerChoice()
function getCompuerChoice() {
    
    // generate a random number between 0 and 1
    let number = Math.random();

    // if number is lesser or equal than 1/3 return "Rock"
    if (number <= 1/3) return "Rock";

    // if number is greater than 2 return "Paper"
    if (number > 2/3) return "Paper";

    // if number is greater than 1/3 and lesser or equal than 2/3 return "Scissors"
    return "Scissors";
}

console.log(getCompuerChoice());