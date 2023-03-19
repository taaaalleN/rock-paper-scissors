let playerScore = 0;
let computerScore = 0;
let rounds = 0;

let playerScoreText = document.querySelector("#player-score");
let computerScoreText = document.querySelector("#computer-score");
let roundsText = document.querySelector("#rounds");

const resetGameBtn = document.querySelector("#reset-game");
resetGameBtn.addEventListener("click", () => {
  resetGame();
});

// const choices = document.querySelectorAll("#game-area .choice");
// choices.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     console.log("Player choice: ", e.target.id);
//     playRound(e.target.vale, getComputerChoice());
//   });
// });

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
  roundsText.innerText = rounds;
}

function incrementRound() {
  rounds++;
  roundsText.innerText = rounds;
  console.log("Rounds from incrementRound", rounds);
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  // return console.log(
  //   "Computer choice: ",
  //   choices[Math.floor(Math.random() * choices.length)]
  // );
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(choice) {
  choice.toLowerCase();
  return choice;
}

function playRound(playerMove, computerMove) {
  incrementRound();
  //   console.log("Player move: ", playerMove, "\nComputer move: ", computerMove);
  if (!playerMove || !computerMove) {
    console.log(playerMove, computerMove);
    console.log("Something went wrong");
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
    return `${capitalizeFirstLetter(
      playerMove
    )} beats ${computerMove}. You win!`;
  } else {
    computerScore++;
    return `${capitalizeFirstLetter(
      computerMove
    )} beats ${playerMove}. You lose!`;
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
  if (playerScore >= 3 || (rounds == 5 && playerScore > computerScore)) {
    alert("You win");
  } else if (
    computerScore >= 3 ||
    (rounds == 5 && computerScore > playerScore)
  ) {
    alert("You lose");
  }
}

function game() {
  console.log("Game is live!");
  // let rounds = 0;
  const choices = document.querySelectorAll("#game-area .choice");

  while (rounds < 5) {
    // console.log("Rounds from game", rounds);
    // const playerChoice = prompt("Rock, paper or scissors?");
    // getPlayerChoice(playerChoice);
    choices.forEach((choice) => {
      choice.addEventListener("click", (e) => {
        console.log("Player choice: ", e.target.id);
        const playerMove = e.target.id;
        const computerChoice = getComputerChoice();
        console.log("Computer choice: ", computerChoice);
        playRound(playerMove, computerChoice);
      });
    });
    // rounds++;
  }
  determineWinner();
  console.log("Game is over");
}

// console.log(playRound(playerChoice, computerChoice));
game();
