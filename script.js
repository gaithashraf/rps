const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let scoreLimit = 3;
let gameOver = false;

const scoreDisplay = document.getElementById('score');
const computerChoiceDisplay = document.getElementById('computerChoice');
const roundResultDisplay = document.getElementById('roundResult');
const gameStatusDisplay = document.getElementById('gameStatus');
const form = document.getElementById('gameForm');
const scoreLimitInput = document.getElementById('sLimit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  scoreLimit = parseInt(scoreLimitInput.value) || 3;
  resetGame();
  gameStatusDisplay.textContent = `First to ${scoreLimit} wins!`;
});

function play(playerChoice) {
  if (gameOver) return;

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  computerChoiceDisplay.textContent = `Computer Choice: ${computerChoice}`;

  roundResultDisplay.className = '';
  
  if (playerChoice === computerChoice) {
    roundResultDisplay.textContent = "It's a tie!";
    roundResultDisplay.classList.add('tie');
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    roundResultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    roundResultDisplay.classList.add('win');
  } else {
    computerScore++;
    roundResultDisplay.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}`;
    roundResultDisplay.classList.add('lose');
  }

  updateScore();
}

function updateScore() {
  scoreDisplay.textContent = `Computer: ${computerScore} - ${playerScore} :Player`;

  if (playerScore >= scoreLimit) {
    gameStatusDisplay.textContent = "🎉 You Won the Game!";
    gameStatusDisplay.classList.add('win');
    gameOver = true;
  } else if (computerScore >= scoreLimit) {
    gameStatusDisplay.textContent = "🖥️ Computer Won the Game!";
    gameStatusDisplay.classList.add('lose');
    gameOver = true;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  computerChoiceDisplay.textContent = "Computer Choice: - ";
  roundResultDisplay.textContent = "";
  roundResultDisplay.className = '';
  gameStatusDisplay.textContent = "";
  gameStatusDisplay.className = '';
  scoreDisplay.textContent = `Computer: 0 - 0 :Player`;
}