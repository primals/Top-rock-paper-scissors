
function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return 0
    }
    else {
        if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                return -1;
            }
            else {
                return 1;
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            if (computerChoice == "paper") {
                return -1;
            }
            else {
                return 1;
            }
        }
    }
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

const container = document.querySelector("#container");

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.setAttribute("id", "paper");

const rock = document.createElement("button");
rock.textContent = "Rock"
rock.setAttribute("id", "rock");
const scissors = document.createElement("button");
scissors.textContent = "Scissors"
scissors.setAttribute("id", "scissors");

const scores = document.createElement("div");
scores.textContent = "human score: " + humanScore +  " computer score: " + computerScore;

container.appendChild(paper);
container.appendChild(rock);
container.appendChild(scissors);
container.appendChild(scores);


container.addEventListener("click", (event) => {
    let target = event.target;
    let winner = 0;

    switch(target.id) {
        case "paper":
            console.log("You win!!");
            winner = playRound("psaper", computerChoice());
            updateScore(winner);
            break;
        case "rock":
            console.log("You win!!");
            winner = playRound("rock", computerChoice());
            updateScore(winner);
            break;
        case "scissors":
            console.log("You win!!");
            winner = playRound("scissors", computerChoice());
            updateScore(winner);
            break;
    }
})

function updateScore(newScore) {
    if (newScore == 1) {
        humanScore++;
    }
    else if (newScore == -1) {
        computerScore++;
    }
    scores.textContent = "human score: " + humanScore +  " computer score: " + computerScore;

    if (humanScore == 5) {
        scores.textContent = "You Win!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        scores.textContent = "You Lose";
        humanScore = 0;
        computerScore = 0;
    }
}



