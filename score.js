
 // Iteration 5: Store the player score and display it on the game over screen

const ScoreBoard=document.getElementById('score-board');
const PlayAgain=document.getElementById('play-again-button');
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

ScoreBoard.textContent=score;
PlayAgain.onclick=()=>{

   window.location.href='game.html';
}

