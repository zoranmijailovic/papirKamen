const choices = ["rock", "paper", "scissors"];
const dugme = document.querySelector('.pokreni');
const input = document.querySelector('.input');
let brojac = 0;



function getComputerChoice(){
  let izbor = choices[randomIndex()];
  return izbor;
}

function randomIndex(){
  return Math.floor(Math.random() * choices.length);
}

dugme.addEventListener('click', function(){
  let player = input.value;
  let comp = getComputerChoice();
  
 
    if(player === comp){
      console.log("tie");
      brojac ++;
    }else if((player == "rock" && comp == "scissors") ||
    (player == "paper" && comp == "rock") ||
    (player == "scissors" && comp == "paper")){
      console.log("won");
      
    }else{
      console.log("lose");
    }
  }
  
)



