        
const container = document.querySelector('#container');

    const btnRock = document.createElement('button')
        btnRock.classList.add('buttons');
    const btnScissors = document.createElement('button');

    const btnPaper = document.createElement('button');

    const playerSelection = onclick('btn');
    
    const shoot = ["rock", "paper", "scissors"];
    function computerPlay() {
        return shoot[Math.floor(Math.random() * 3)];
    }
    
    const computerSelection = computerPlay();
    let scoreP = 0;
    let scoreC = 0;

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "rock") {
            return "Tie! Rock is equal to Rock!"+
                "   Score: " + (scoreP + "-" + scoreC);
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You Lose! Paper beats Rock!"+
                "   Score: " + (scoreP + "-" + ++scoreC);
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win! Rock beats Scissors!"+
                "   Score: " + (++scoreP + "-" + scoreC);
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper beats Rock!"+
                "   Score: " + (++scoreP + "-" + scoreC);
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            return "Tie! Paper is equal to Paper!"+
                "   Score: " + (scoreP + "-" + scoreC);
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You Lose! Scissors beat Paper!"+ 
                "   Score: " + (scoreP + "-" + ++scoreC);
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You Lose! Rock beats Scissors!"+
                "   Score: " + (scoreP + "-" + ++scoreC);
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win! Scissors beat Paper!"+
                "   Score: " + (++scoreP + "-" + scoreC);
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return "Tie! Scissors are equal to Scissors!"+
                "   Score: " + (scoreP + "-" + scoreC);
        } else {
            alert("You scared? Please refresh the page and choose Rock, Paper, or Scissors.");
        }
    }

    //function playGame() {
        //for (let i = 1; i < 6; ++i) {
            //console.log("Round " + i + ". " + playRound(playerSelection, computerSelection)); 
        //}
    //}
    function finalScore() {
        if (scoreP > scoreC) {
                console.log("Final Score: " + (scoreP + "-" + scoreC) + "   Great job! you won!");
            } else if (scoreP < scoreC) {
                console.log("Final Score: " + (scoreP + "-" + scoreC) + "   You lost. Better luck next time!");
            } else if (scoreP == scoreC) {
                console.log("Final Score: " + (scoreP + "-" + scoreC) + "   Not much to say, it was a tie. Try again!");
            }
    }
    console.log(playGame())+
    console.log(finalScore());