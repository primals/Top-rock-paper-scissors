
function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("tie");
        return 0
    }
    else {
        if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                console.log("you lose! scissors beats paper")
                return -1;
            }
            else {
                console.log("you win! paper beats rock")
                return 1;
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("you lose! rock beats scissors")
                return -1;
            }
            else {
                console.log("you win! scissors beats paper")
                return 1;
            }
        }
        else {
            if (computerChoice == "paper") {
                console.log("you lose! paper beats rock")
                return -1;
            }
            else {
                console.log("you win! rock beats scissors")
                return 1;
            }
        }
    }
}

function humanChoice() {
    let userChoice = window.prompt("rock paper or scissor?");
    return userChoice;
}

function computerChoice() {
    let rng = Math.floor(Math.random() * 100) % 3;
    if (rng == 0) {
        return "rock";
    }
    else if (rng = 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    const humanSelection = humanChoice().toLowerCase();
    const computerSelection = computerChoice();
    const winner = playRound(humanSelection, computerSelection);

    if (winner == 1) {
        humanScore++;
    }
    else if (winner == -1) {
        computerScore++;
    }
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
}

if (humanScore > computerScore) {
    console.log("You win!!");
}
else {
    console.log("you lose :(");
}

