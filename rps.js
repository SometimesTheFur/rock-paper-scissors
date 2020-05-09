        


function player() {
    const btnRock = document.querySelector('rock');
    const btnPaper = document.querySelector('paper');
    const btnScissors = document.querySelector('scissors');
      
}
   document.getElementById('rock').addEventListener('click', playRound);
   document.getElementById('paper').addEventListener('click', playRound);
   document.getElementById('scissors').addEventListener('click', playRound);
    
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
            return "Please choose Rock, Paper, or Scissors.";
        }
    }

    //function playGame() {
        //for (let i = 1; i < 6; ++i) {
            //console.log("Round " + i + ". " + playRound(playerSelection, computerSelection)); 
        //}
    //}
    function finalScore() {
        if (scoreP > scoreC) {
                return "Final Score: " + (scoreP + "-" + scoreC) + "   Great job! you won!";
            } else if (scoreP < scoreC) {
                return "Final Score: " + (scoreP + "-" + scoreC) + "   You lost. Better luck next time!";
            } else if (scoreP == scoreC) {
                return "Final Score: " + (scoreP + "-" + scoreC) + "   Not much to say, it was a tie. Try again!";
            }
    }
    //console.log(playGame())+
    const round = document.querySelector('#round');
    document.addEventListener('click', finalScore);
    document.getElementById('round').innerHTML = playRound();