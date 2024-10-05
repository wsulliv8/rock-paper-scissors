let log = console.log;
const btn = document.querySelector('.buttons');
const scoreBoard = document.querySelector('.score');
let humanChoice = '';
let scores = [0, 0, 0];

btn.addEventListener('click', (event) => {
  switch (event.target.innerText){
    case 'rock':
      humanChoice = 'rock';
      break;
    case 'paper':
      humanChoice = 'paper';
      break;
    case 'scissors':
      humanChoice = 'scissors';
      break;
  }

  scores = playRound(getComputerChoice(), humanChoice, scores);
  scoreBoard.innerText = `Human: ${scores[0]} Computer: ${scores[1]}`;
})



function getComputerChoice() {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function updateScore (){

}

function playRound(computerChoice, humanChoice, scores) {
  humanChoice = humanChoice.toLowerCase();
  switch(true) {
    case (humanChoice==='rock' && computerChoice==='scissors'):
    case (humanChoice==='paper' && computerChoice==='rock'):
    case (humanChoice==='scissors' && computerChoice==='paper'):
      log(`You win! ${humanChoice} beats ${computerChoice}.`);
      scores[0]++;
      return scores;
    case (humanChoice==='rock' && computerChoice==='paper'):
    case (humanChoice==='paper' && computerChoice==='scissors'):
    case (humanChoice==='scissors' && computerChoice==='rock'):
      log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      scores[1]++;
      return scores;
    default:
      log(`Tie!`);
      scores[2]++;
      return scores;
  }
} 




