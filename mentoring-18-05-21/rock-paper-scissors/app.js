const playGame = () => {
  // Initial scores for both players
  let playerScore = 0;
  let computerScore = 0;

  // Function to start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  // Function to play the match
  const playMatch = () => {
    // Add player's options
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      })
    })
    // Add Computer options - something randomely generated 
    const computerOptions = ['rock', 'paper', 'scissors'];
  
    options.forEach(option => {
      option.addEventListener('click', function() {
        // Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        

        setTimeout(() => {
          // Here is where we call compare hands
          compareHands(this.textContent, computerChoice);

          // Update images
          playerHand.src = `./assets/${this.textContent}.png`
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        // Add animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      })
    });
  }

  // Comparison function
  const compareHands = (playerChoice, computerChoice) => {
    // Update text
    const winner = document.querySelector('.winner');
    // We are checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie!';
      return;
    }
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player wins!';
        playerScore++;
        updateScore(); 
        return;
      } else {
        winner.textContent = 'Computer wins!';
        computerScore++;
        updateScore();
        return;
      }
    }
    // Check for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer wins!';
        computerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player wins!';
        playerScore++;
        updateScore();
        return;
      }
    }
    // Check for paper
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer wins!';
        computerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player wins!';
        playerScore++;
        updateScore();
        return;
      }
    }
  }

  const updateScore = () => {
    const pScore = document.querySelector('.player-score p');
    const cScore = document.querySelector('.computer-score p')
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  }

  // Call all the inner functions: startGame, updateScore, etc..
  startGame();
  playMatch();
};

playGame();


