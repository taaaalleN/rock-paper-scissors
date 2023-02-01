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
  if (playerChoice == computerMove) {
    return "It's a tie!";
  } else if (
    (playerChoice == "rock" && computerMove == "scissors") ||
    (playerChoice == "scissors" && computerMove == "paper") ||
    (playerChoice == "paper" && computerMove == "rock")
  ) {
    return `${capitalizeFirstLetter(playerChoice)} beats ${computerMove}. You win!`;
  } else {
    return `${capitalizeFirstLetter(computerMove)} beats ${playerChoice}. You lose!`;
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

function game() {
  let rounds = 0;
  while (rounds < 5) {
    playRound();
  }
  alert();
}

const playerChoice = getPlayerChoice("rock");
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));
