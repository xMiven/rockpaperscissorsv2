
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    //0 for Rock
    //1 for Paper
    //2 for Scissors
    if(choice === 0) {
        choice = "Rock"
    } else if (choice === 1) {
        choice = "Paper"
    } else if (choice === 2) {
        choice = "Scissors"
    }
    return choice
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    choice = choice.toLowerCase()
    choice = choice.replace(choice.slice(0, 1), (choice.slice(0, 1).toUpperCase()))
return choice
}

function game(cpuScore, playerScore) {
    let cpu = getComputerChoice()
    let player = getPlayerChoice()

if (cpu === player) {
    console.log(`The CPU chose ${cpu}`)
    console.log("Tie!")
} else if ((cpu === "Rock") && (player === "Paper")) {
    console.log(`The CPU chose ${cpu}`)
    console.log("The Player Wins!")
    return("player")
} else if ((cpu === "Rock") && (player === "Scissors")) {
    console.log(`The CPU chose ${cpu}`)
    console.log("The CPU Wins!")
    return("cpu")


} else if ((cpu === "Paper") && (player === "Rock")) {
    console.log(`The CPU chose ${cpu}`)
    console.log("The CPU Wins!")
    return("cpu")


} else if ((cpu === "Paper") && (player === "Scissors")) {
    console.log(`The CPU chose ${cpu}`)
    console.log("The Player Wins!")
    return("player")

} else if ((cpu === "Scissors") && (player === "Rock")) {
    console.log(`The CPU chose ${cpu}`)
    console.log("The Player Wins!")
    return("player")
} else if ((cpu === "Scissors") && (player === "Paper")) {
    console.log(`The CPU chose ${cpu}`)
    console.log("The CPU Wins!")
    cpuScore++
    return("cpu")

} else {
    console.log("Please choose a valid option")
}
}

function playGame() {
    let cpuScore = 0;
    let playerScore = 0;

    for(i = 0; i < 3; i++) {
        let winner = game()
        if (winner === "cpu") {
            cpuScore++
        } else if (winner === "player") {
            playerScore++
        }
        
    }
    if (cpuScore > playerScore) {
        console.log("The CPU is the Champion!")
    } else if (cpuScore < playerScore) {
        console.log("The player is the Champion!")
    } else {
        console.log("It´s a tie for the championship!!")
    }
}