let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function getComputerChoice () {
    let answer = Math.random();
        if (answer <= 0.33) {
            return "rock"
        }
        else if (answer <= 0.67) {
            return "paper"
        }
        else {
            return "scissors"
        }
}
console.log(getComputerChoice());


function getHumanChoice() {
    let myChoice = prompt('Enter "Rock", "Paper" or "Scissors"')
    return myChoice.toLowerCase();
}
//console.log(getHumanChoice());


function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === humanChoice) {
        console.log("It's a tie!")
    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock!")
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats rock!")
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors beats paper!")
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats paper!")
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats scissors!")
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors!")
    } 
    else {
        console.log("Invalid input!")
    }
}
console.log(playRound(humanChoice, computerChoice));


