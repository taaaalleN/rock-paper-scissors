console.log("test");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(choice) {
  choice.toLowerCase();
  return choice;
}

function playRound(playerMove, computerMove) {
  // REMAKE INTO SWITCH STATEMENT
  if (!playerMove || !computerChoice) {
    return null;
  }

  // Define rules outside of this?
  if (playerChoice == computerChoice) {
    return "It's a tie!";
  } else if (playerChoice == "rock" && computerChoice == "") {
  } else if (playerChoice == "rock" && computerChoice == "") {
  }
  // return the winning move and its player
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
}

const playerChoice = getPlayerChoice("rock");
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));
