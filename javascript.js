function getComputerChoice () {
    let answer = Math.random();
        if (answer <= 0.33) {
            console.log("Rock")
        }
        else if (answer <= 0.67) {
            console.log("Paper")
        }
        else {
            console.log("Scissors")
        }
    return answer;
}
console.log(getComputerChoice());

function getHumanChoice() {
    let myChoice = prompt('Enter "Rock", "Paper" or "Scissors"')
    return myChoice;
}
console.log(getHumanChoice());