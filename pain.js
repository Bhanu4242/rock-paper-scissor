function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let humanChoice = prompt(`Round ${round} - Rock, Paper or Scissor?`);

        if (!humanChoice) {
            console.log("Game cancelled.");
            return;
        }

        humanChoice = humanChoice.toLowerCase();
        const validChoices = ["rock", "paper", "scissor"];

        if (!validChoices.includes(humanChoice)) {
            console.log("Invalid choice. Please select Rock, Paper, or Scissor.");
            round--; // repeat the same round
            continue;
        }

        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(result);

        if (result.startsWith("You win")) {
            humanScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
    }

    console.log(`\nFinal Score - You: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (humanScore < computerScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a draw!");
    }
}

// Start the game
playGame();
