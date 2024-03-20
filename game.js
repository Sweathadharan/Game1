// Iteration 2: Generate 2 random number and display it on the screen

const updateScore=()=>{
   score+=1;
}

function numbers()
{
 const num1 = document.getElementById('number1');
 const num2 = document.getElementById('number2')
 const Num1 = Math.floor(Math.random()*100);
 const Num2 = Math.floor(Math.random()*100);
 num1.textContent=Num1;
 num2.textContent=Num2;
 
}

// Iteration 3: Make the options button functional
  const button = document.getElementById('buttons');
  const greater = document.getElementById('greater-than');
  const equal = document.getElementById('equal-to');
  const lesser = document.getElementById('lesser-than');
   
let score=0;
  button.addEventListener('click', function(event) {
   const num1 = parseInt(document.getElementById('number1').textContent);
   const num2 =parseInt(document.getElementById('number2').textContent);
   
     if (event.target === greater && num1 > num2)
     {
        console.log(greater);
        updateScore();
      } 
      else if (event.target === equal && num1 === num2) {
         console.log(equal);
         updateScore();
      }
      else if (event.target === lesser && num1 < num2) {
         console.log(lesser);
         updateScore();
      }
      else{
         
         window.location.href = 'gameover.html?score=' + score;
      }
      console.log(num1,num2)
      
      let number = numbers()
   
  });


// Iteration 4: Build a timer for the game
const time=document.getElementById('timer')
let count = 0;
const timer = setInterval(function() {
  count++;
  time.textContent=count;  
},1000);

