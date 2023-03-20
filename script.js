let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playerScoreText = document.querySelector("#player-score span");
let computerScoreText = document.querySelector("#computer-score span");
let roundsText = document.querySelector("#rounds #count");
let playerMoveText = document.querySelector("#player-move-text #player-move");
let computerMoveText = document.querySelector("#computer-move-text #computer-move");
let gameText = document.querySelector("#game-text");

const resetGameBtn = document.querySelector("#reset-game");
resetGameBtn.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  playerScore = 0;
  playerScoreText.innerText = playerScore;
  computerScore = 0;
  computerScoreText.innerText = computerScore;
  rounds = 0;
  roundsText.innerText = rounds;
}

function incrementRound() {
  rounds++;
  roundsText.innerText = rounds;
  // console.log("Rounds from incrementRound", rounds);
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  // return console.log(
  //   "Computer choice: ",
  //   choices[Math.floor(Math.random() * choices.length)]
  // );
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerMoveText.innerText = `${computerChoice}`;
  return computerChoice;
}

function playRound(playerMove, computerMove) {
  //   console.log("Player move: ", playerMove, "\nComputer move: ", computerMove);
  if (!playerMove || !computerMove) {
    console.log(playerMove, computerMove);
    console.log("Something went wrong");
    return null;
  }

  incrementRound();

  // Define rules outside of this?
  if (playerMove == computerMove) {
    gameText.innerText = "It's a tie!";
  } else if (
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "paper") ||
    (playerMove == "paper" && computerMove == "rock")
  ) {
    playerScore++;
    playerScoreText.innerText = playerScore;
    gameText.innerText = `${capitalizeFirstLetter(playerMove)} beats ${computerMove}. You win!`;
  } else {
    computerScore++;
    computerScoreText.innerText = computerScore;
    gameText.innerText = `${capitalizeFirstLetter(computerMove)} beats ${playerMove}. You lose!`;
  }
  // return the winning move and its player
  determineWinner();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function determineWinner() {
  if (playerScore >= 3 || (rounds == 5 && playerScore > computerScore)) {
    alert("You win");
  } else if (computerScore >= 3 || (rounds == 5 && computerScore > playerScore)) {
    alert("You lose");
  }
}

const choices = document.querySelectorAll("#game-area .choice");
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    console.log("Player choice: ", e.target.id);
    playerMoveText.innerText = `${e.target.id}`;
    playRound(e.target.id, getComputerChoice());
  });
});
