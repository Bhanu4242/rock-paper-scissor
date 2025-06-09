// Function to get a random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// DOM elements
const buttons = document.querySelectorAll(".choose");
const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

let humanScore = 0;
let computerScore = 0;

// Function to update the score and display results
function updateGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.startsWith("You win")) {
        humanScore++;
    } else if (result.startsWith("You lose")) {
        computerScore++;
    }

    resultDiv.innerHTML = `
        <p>You chose: ${playerSelection}</p>
        <p>Computer chose: ${computerSelection}</p>
        <p>Score: You ${humanScore} - ${computerScore} Computer</p>
    `;

    if (humanScore === 5) {
        resultDiv.innerHTML += `<p>🎉 You won the game!</p>`;
        disableButtons();
    } else if (computerScore === 5) {
        resultDiv.innerHTML += `<p>💻 Computer wins the game!</p>`;
        disableButtons();
    }
}

// Function to disable buttons once the game ends
function disableButtons() {
    buttons.forEach(button => button.disabled = true);
    restartButton.style.display = "block"; // Show the restart button
}

// Create restart button
const restartButton = document.createElement("button");
restartButton.textContent = "Restart Game";
restartButton.style.display = "none"; // Hide until game ends
document.body.appendChild(restartButton);

// Function to reset the game
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    resultDiv.innerHTML = ""; // Clear results
    buttons.forEach(button => button.disabled = false); // Re-enable buttons
    restartButton.style.display = "none"; // Hide restart button again
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        updateGame(button.textContent.toLowerCase());
    });
});

// Add event listener to restart button
restartButton.addEventListener("click", restartGame);