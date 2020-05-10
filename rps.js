const shoot = ["rock", "paper", "scissors"];   
let playerSelection = '';
let computerSelection = '';
let scoreP = 0;
let scoreC = 0;

    function computerPlay() {
        return shoot[Math.floor(Math.random() * 3)];
    }
const round = document.querySelector('#round');
const comp = document.querySelector('#comp');

    const rockBtn = document.querySelector('#rock');
        rockBtn.addEventListener('click', function() {
            playerSelection = shoot[0];
            if (playerSelection === "rock" && computerPlay() === "rock") {
                comp.textContent = "Rock!"
                round.textContent = "Tie! Rock is equal to Rock!"+
                    "   Score: " + (scoreP + "-" + scoreC);
            } else if (playerSelection === "rock" && computerPlay() === "paper") {
                comp.textContent = "Paper!"
                round.textContent = "You Lose! Paper beats Rock!"+
                    "   Score: " + (scoreP + "-" + ++scoreC);
            } else if (playerSelection === "rock" && computerPlay() === "scissors") {
                comp.textContent = "Scissors!"
                round.textContent = "You win! Rock beats Scissors!"+
                    "   Score: " + (++scoreP + "-" + scoreC);
            }
        });
        //rockBtn.addEventListener('click', playRound(playerSelection, computerSelection));
    
    const paperBtn = document.querySelector('#paper');
        paperBtn.addEventListener('click', function() {
            playerSelection = shoot[1];
            if (playerSelection === "paper" && computerPlay() === "rock") {
                comp.textContent = "Rock!"
                round.textContent = "You win! Paper beats Rock!"+
                    "   Score: " + (++scoreP + "-" + scoreC);
            } else if (playerSelection === "paper" && computerPlay() === "paper") {
                comp.textContent = "Paper!"
                round.textContent = "Tie! Paper is equal to Paper!"+
                    "   Score: " + (scoreP + "-" + scoreC);
            } else if (playerSelection === "paper" && computerPlay() === "scissors") {
                comp.textContent = "Scissors!"
                round.textContent = "You Lose! Scissors beat Paper!"+ 
                    "   Score: " + (scoreP + "-" + ++scoreC);
            }
        });
        //paperBtn.addEventListener('click', playRound(playerSelection, computerSelection));

    const scissorsBtn = document.querySelector('#scissors');
        scissorsBtn.addEventListener('click', function() {
            playerSelection = shoot[2];
            if (playerSelection === "scissors" && computerPlay() === "rock") {
                comp.textContent = "Rock!"
                round.textContent = "You Lose! Rock beats Scissors!"+
                    "   Score: " + (scoreP + "-" + ++scoreC);
            } else if (playerSelection === "scissors" && computerPlay() === "paper") {
                comp.textContent = "Paper!"
                round.textContent = "You win! Scissors beat Paper!"+
                    "   Score: " + (++scoreP + "-" + scoreC);
            } else if (playerSelection === "scissors" && computerPlay() === "scissors") {
                comp.textContent = "Scissors!"
                round.textContent = "Tie! Scissors are equal to Scissors!"+
                    "   Score: " + (scoreP + "-" + scoreC);
            }
        });
        //scissorsBtn.addEventListener('click', playRound(playerSelection, computerSelection));



//const play = document.querySelectorAll('button');
    //play.addEventListener('click', playRound);



    //function playGame() {
        //for (let i = 1; i < 6; ++i) {
            //console.log("Round " + i + ". " + playRound(playerSelection, computerPlay)); 
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
        //document.addEventListener('click', finalScore); 
    //console.log(playGame())+
