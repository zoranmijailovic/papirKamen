const choices = ["rock", "paper", "scissors"];

let btns = document.querySelectorAll('button');
let result = document.querySelector('.rezultat');
let playerBoard = document.querySelector('.playerScoreBoard');
let compBoard = document.querySelector('.compScoreBoard');



function getComputerChoice(){
  let izbor = choices[randomIndex()];
  return izbor;
}

function randomIndex(){
  return Math.floor(Math.random() * choices.length);
}
// this one is computer choice


let computerScore = 0;
let playerScore = 0;
btns.forEach(function(btn){
    btn.addEventListener('click', () => {
    const playerChoice = btn.innerText;
    const computerChoice = getComputerChoice();
    console.log(computerChoice)

    if(playerChoice === computerChoice){
      result.textContent = "nereseno";
      
    }else if((playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")){
      result.textContent = 'pobedili ste';
      playerScore++;
      
      playerBoard.innerText = playerScore;
      
      
    }else{
      result.textContent = "izgubili ste";
      computerScore++;
      compBoard.textContent = computerScore;
      
      
    }
    
  });
});


















