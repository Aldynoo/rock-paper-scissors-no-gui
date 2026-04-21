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
//console.log(getComputerChoice());


function getHumanChoice() {
    let myChoice = prompt('Enter "Rock", "Paper" or "Scissors"')
    return myChoice.toLowerCase();
}
//console.log(getHumanChoice());

function playGame() {
let humanScore = 0;
let computerScore = 0;

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
        const playerSelection = button.id;
        
        playRound(playerSelection);
    })
})

const resultsDiv = document.querySelector("#results");
resultsDiv.textContent = `Player: ${humanScore}, 
                          CPU: ${computerScore}.`


console.log("Final score:");
console.log("Player: ", humanScore);
console.log("CPU: ", computerScore);

if (humanScore > computerScore) {
    console.log("You win this game!");
} 
else if (humanScore < computerScore) {
    console.log("You lose the game!")
} 
else {console.log("This game it's a tie!");}
}
playGame();

