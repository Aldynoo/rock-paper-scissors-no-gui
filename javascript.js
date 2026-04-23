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

function getHumanChoice() {
    let myChoice = prompt('Enter "Rock", "Paper" or "Scissors"')
    return myChoice.toLowerCase();
}

function playGame() {
let humanScore = 0;
let computerScore = 0;

let resultsDiv = document.querySelector("#results");
resultsDiv.style.whiteSpace = "pre-line";

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors beats paper!");
        computerScore++;
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats paper!");
        humanScore++;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors!");
        humanScore++;
    } 
    else {
        console.log("Invalid input!")
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore === 5 || computerScore === 5) return;
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
        resultsDiv.textContent = `Player: ${humanScore}, CPU: ${computerScore}.`;

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                resultsDiv.textContent += `\nYou win the game!`;
            } else {
                resultsDiv.textContent += `\nYou lose the game!`;
            }
        }
    })
})
}
playGame();

