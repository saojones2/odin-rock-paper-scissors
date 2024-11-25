function getComputerChoice () {
    let randNum = Math.floor(Math.random() * 3) + 1
    let CompChoice = ""
    switch(randNum) {
        case 1:
            CompChoice = ("rock")
            break;
        case 2:
            CompChoice = ("scissors")
            break;
        default:
            CompChoice = ("paper");
    }

    return CompChoice
}

function getHumanChoice () {

    let userInput = prompt('Rock, Paper or Scissors?: ')

    let lowerUserInput = userInput.toLowerCase()

    if ( lowerUserInput ==  "scissors" || lowerUserInput == "rock"  || lowerUserInput == "paper") {
        return userInput;
    } else {
        return "Invalid Choice!";
    }
}





let numRound = 1

let humanScore = 0

let computerScore = 0

function playRound (humanChoice, computerChoice) {

    console.log("Round " + numRound)
    setTimeout(2000)
    console.log("Your Choice: " + humanChoice)
    console.log("Computer Choice: " + computerChoice)

    if (humanChoice === computerChoice) {
        numRound += 1
        return "You draw";
    } else if ( (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") ) {
        humanScore += 1
        numRound += 1
        return humanChoice + " beats " + computerChoice +  
        ". You win! Your Score: " + humanScore + ". Computer Score: " + computerScore + ".";
    } else {
        computerScore += 1
        numRound += 1
        return computerChoice + " beats " + humanChoice + 
        ". You lose! Your Score: " + humanScore + ". Computer Score: " + computerScore + ".";
    }

    setTimeout(2000)
} 


while (numRound < 6) {

let humanSelection = getHumanChoice()

let computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))
}

if (humanScore == computerScore) {
    console.log("You Draw!");
} else if (humanScore > computerScore) {
    console.log("You Win!");
} else {
    console.log("You Lose!");
}