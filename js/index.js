let userScore  = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Add event listeners
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber =Math.floor(Math.random()*3);

    return choices[randomNumber];
}

function convertToUpper(word){
    if (word ==="rock")
        return "Rock"

    
    if (word==="paper")
        return "Paper"

    if (word ==="scissors")
        return "Scissors"

}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToUpper(userChoice)} ${smallUserWord}  beats  ${convertToUpper(computerChoice)} ${smallCompWord}. You win! ✊`;
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToUpper(userChoice)} ${smallUserWord}  loses to  ${convertToUpper(computerChoice)} ${smallCompWord}. You lost! 💩`;
}

function draw(userChoice,computerChoice){
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToUpper(userChoice)} ${smallUserWord}  equals  ${convertToUpper(computerChoice)} ${smallCompWord}. It's a draw! 🖕`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("User Wins");
            win(userChoice,computerChoice);
            break;
        
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("User loses");
            lose(userChoice,computerChoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("It's a draw");
            draw(userChoice,computerChoice);
            break;

    }
}



function main(){

    rock_div.addEventListener('click',function(){
        game("rock");
    });

    paper_div.addEventListener('click',function(){
        game("paper");
    });

    scissors_div.addEventListener('click',function(){
        game("scissors");
    });
}

main();

