const shoot = ["rock", "paper", "scissors"];   
let playerSelection = '';

    const rockBtn = document.querySelector('#rock');
        rockBtn.addEventListener('click', function() {
            playerSelection = shoot[0];
            return playerSelection;
        });

    const paperBtn = document.querySelector('#paper');
        paperBtn.addEventListener('click', function() {
            playerSelection = shoot[1];
            return playerSelection;
        });

    const scissorsBtn = document.querySelector('#scissors');
        scissorsBtn.addEventListener('click', function() {
            playerSelection = shoot[2];
            return playerSelection;
        });




    let scoreP = 0;
    let scoreC = 0;
    
        let computerSelection = '';
    function playRound(playerSelection, computerSelection = computerPlay()) {
        
        if (playerSelection === "rock" && computerPlay() === "rock") {
            return "Tie! Rock is equal to Rock!"+
                "   Score: " + (scoreP + "-" + scoreC);
        } else if (playerSelection === "rock" && computerPlay() === "paper") {
            return "You Lose! Paper beats Rock!"+
                "   Score: " + (scoreP + "-" + ++scoreC);
        } else if (playerSelection === "rock" && computerPlay() === "scissors") {
            return "You win! Rock beats Scissors!"+
                "   Score: " + (++scoreP + "-" + scoreC);
        } else if (playerSelection === "paper" && computerPlay() === "rock") {
            return "You win! Paper beats Rock!"+
                "   Score: " + (++scoreP + "-" + scoreC);
        } else if (playerSelection === "paper" && computerPlay() === "paper") {
            return "Tie! Paper is equal to Paper!"+
                "   Score: " + (scoreP + "-" + scoreC);
        } else if (playerSelection === "paper" && computerPlay() === "scissors") {
            return "You Lose! Scissors beat Paper!"+ 
                "   Score: " + (scoreP + "-" + ++scoreC);
        } else if (playerSelection === "scissors" && computerPlay() === "rock") {
            return "You Lose! Rock beats Scissors!"+
                "   Score: " + (scoreP + "-" + ++scoreC);
        } else if (playerSelection === "scissors" && computerPlay() === "paper") {
            return "You win! Scissors beat Paper!"+
                "   Score: " + (++scoreP + "-" + scoreC);
        } else if (playerSelection === "scissors" && computerPlay() === "scissors") {
            return "Tie! Scissors are equal to Scissors!"+
                "   Score: " + (scoreP + "-" + scoreC);
        } else {
            return "Please choose below.";
        }
    }

    function computerPlay() {
        let rand = shoot[Math.floor(Math.random() * 3)];
        return rand;
    }

    const play = document.querySelectorAll('button');
        play.addEventListener('click' = function(e){
            console.log(play);
        });

    const round = document.querySelector('#round');
    round.innerText = playRound(playerSelection, computerSelection);


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
