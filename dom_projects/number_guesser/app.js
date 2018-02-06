/*
GAME FUNCTION:
 - Player must guiess a number between a min and max
 - Player gets a certain amount of guess
 - Notify player of guiesses remaining
 - notify the player of the correct answer if loose
 - Let player choose to play again
*/

// Game values
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let gueesesLeft = 3;

// UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign Ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// Create event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function() {

  let guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return false;
  }

  // check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! Wou WIN!`);
  } else {
    // Wrong number
    gueesesLeft -= 1;

    if (gueesesLeft === 0) {
      // Lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
      // game continues - answer wrong
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct, ${gueesesLeft} guesses left`, 'red');
      guessInput.value = '';
    }
  }

});



function gameOver(won, msg) {
  guessInput.disabled = true;
  let color;
  color = (won === true)
    ? 'green'
    : 'red';
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

// Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
