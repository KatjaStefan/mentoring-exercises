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

  }

  // Call all the inner functions: startGame, updateScore, etc..
  startGame();
  // Function that compares the hands

  // Function that updates the score


};

playGame();


