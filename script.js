const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
  let izbor = choices[randomIndex()];
  return izbor;
}

function randomIndex(){
  return Math.floor(Math.random() * choices.length);
}

function playGame(){
  const playerChoice = prompt("chose your weapon");
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  

  if(playerChoice === computerChoice){
    return "its a tie";
  }else if((playerChoice == "rock" && computerChoice == "scissors") ||
  (playerChoice == "paper" && computerChoice == "rock") ||
  (playerChoice == "scissors" && computerChoice == "paper")){
    return "you won!";
  }else{
    return "you lose";
  }
}
console.log(playGame());















