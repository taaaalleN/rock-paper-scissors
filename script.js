let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(choice) {
  choice.toLowerCase();
  return choice;
}

function playRound(playerMove, computerMove) {
  //   console.log("Player move: ", playerMove, "\nComputer move: ", computerMove);
  if (!playerMove || !computerMove) {
    return null;
  }

  // Define rules outside of this?
  if (playerMove == computerMove) {
    return "It's a tie!";
  } else if (
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "paper") ||
    (playerMove == "paper" && computerMove == "rock")
  ) {
    playerScore++;
    return `${capitalizeFirstLetter(playerMove)} beats ${computerMove}. You win!`;
  } else {
    computerScore++;
    return `${capitalizeFirstLetter(computerMove)} beats ${playerMove}. You lose!`;
  }
  // return the winning move and its player
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function rules() {
  // Create rules for rock beats scissors etc.
  // to easily call in playRound()?
}

function determineWinner() {
  if (playerScore >= 3 || playerScore > computerScore) {
    alert("You win");
  } else if (computerScore >= 3 || computerScore > playerScore) {
    alert("You lose");
  }
}

function game() {
  let rounds = 0;
  while (rounds < 5) {
    const playerChoice = prompt("Rock, paper or scissors?");
    getPlayerChoice(playerChoice);
    const computerChoice = getComputerChoice();
    // playRound(playerChoice, computerChoice);
    console.log(playRound(playerChoice, computerChoice));
    rounds++;
  }
  determineWinner();
}

// console.log(playRound(playerChoice, computerChoice));
game();
