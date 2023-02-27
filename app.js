const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreboard = document.querySelector("#scoreboard");
const cpuChoice = document.querySelector("#cpuChoice");
const winnerBoard = document.querySelector("#winner");
const gameOver = document.querySelector("#gameOver");
let isGameOver = false;

let cpuScore = 0;
let playerScore = 0;

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  //0 for Rock
  //1 for Paper
  //2 for Scissors
  if (choice === 0) {
    choice = "Rock";
  } else if (choice === 1) {
    choice = "Paper";
  } else if (choice === 2) {
    choice = "Scissors";
  }
  return choice;
}

function setWinner(winner, tie = false) {
  if (!tie) {
    winnerBoard.innerText = `${winner} wins!`;
    if (winner === "CPU") {
      cpuScore++;
    } else {
      playerScore++;
    }
  } else {
    winnerBoard.innerText = "It´s a tie!";
  }
}

function getPlayerChoice(choice) {
  choice = choice.replace(choice.slice(0, 1), choice.slice(0, 1).toUpperCase());
  return choice;
}

function resetGame() {
  gameOver.style.visibility = "hidden";
  playerScore = 0;
  cpuScore = 0;
  cpuChoice.innerText = "";
  winnerBoard.innerText = "";
  scoreboard.innerText = `${playerScore} - ${cpuScore}`;
  isGameOver = false;
}

function game(playerChoice) {
  let cpu = getComputerChoice();
  let player = getPlayerChoice(playerChoice);
  if (isGameOver) {
    resetGame();
  } else {
    if (cpu === player) {
      setWinner("Nobody", true);
    } else if (cpu === "Rock" && player === "Paper") {
      setWinner("Player");
    } else if (cpu === "Rock" && player === "Scissors") {
      setWinner("CPU");
    } else if (cpu === "Paper" && player === "Rock") {
      setWinner("CPU");
    } else if (cpu === "Paper" && player === "Scissors") {
      setWinner("Player");
    } else if (cpu === "Scissors" && player === "Rock") {
      setWinner("Player");
    } else if (cpu === "Scissors" && player === "Paper") {
      setWinner("CPU");
    }
    cpuChoice.innerText = `The CPU chose ${cpu}`;
    scoreboard.innerText = `${playerScore} - ${cpuScore}`;

    if (playerScore === 5 || cpuScore === 5) {
      gameOver.style.visibility = "visible";
      isGameOver = true;
    }
  }
}

// function playGame() {
//     let cpuScore = 0;
//     let playerScore = 0;

//     for(i = 0; i < 3; i++) {
//         let winner = game()
//         if (winner === "cpu") {
//             cpuScore++
//         } else if (winner === "player") {
//             playerScore++
//         }

//     }
//     if (cpuScore > playerScore) {
//         console.log("The CPU is the Champion!")
//     } else if (cpuScore < playerScore) {
//         console.log("The player is the Champion!")
//     } else {
//         console.log("It´s a tie for the championship!!")
//     }
// }
