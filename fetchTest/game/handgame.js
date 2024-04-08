










let playerInput = prompt("Your choice ( rock, paper, scissors) ?")
function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase();
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors" || playerInput === "bomb") {
        return playerInput;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return prompt("Your choice (rock, paper, scissors)?");
    }
}
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function findWinner(playerInput, computerChoice) {
    if (playerInput === 'bomb') {
        return 'Big Win for the Player';
    } else if (playerInput === computerChoice) {
        return 'Tied';
    }
    switch (playerInput) {
        case 'rock':
            return computerChoice === 'scissors' ? "Player's Won" : "Computer's Won";
            break;
        case 'scissors':
            return computerChoice === 'paper' ? "Player's Won" : "Computer's Won";
            break;
        case 'paper':
            return computerChoice === 'rock' ? "Player's Won" : "Computer's Won";
            break;
    }
}
function playGamePSR() {
    let uChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();
    console.log("Player's choice", uChoice);
    console.log("Computer's choice", computerChoice);
    console.log(findWinner(uChoice, computerChoice));
}


playGamePSR();