
var timer = 60;
var score = 0;
var rn = 0;
var timerinter;

function resetGame() {
  timer = 60;
  score = 0;
  document.querySelector("#Timervalue").textContent = timer;
  document.querySelector("#scoreval").textContent = score;
  makeBubble();
  gethit();
  clearInterval(timerinter);
  runTimer();
}

function startGame() {
  // Hide the start button and show the game elements
  document.querySelector("#panel-bttm").innerHTML = "";
  runTimer();
  makeBubble();
  gethit();
}

function scorebuild(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function gethit(){
   rn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = rn;
}

function makeBubble(){
    var clutter = "";
    for(var i = 1; i <= 130; i++){
        var random = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#panel-bttm").innerHTML = clutter;
}

function runTimer(){
    timerinter = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#Timervalue").textContent = timer;
        } else {
            clearInterval(timerinter); 
            document.querySelector("#panel-bttm").innerHTML = `
                <h1>Game Over</h1>
                <h2>Your Score: ${score}</h2>`;
        }
    }, 1000);
}

// Event listener for bubbles
document.querySelector("#panel-bttm").addEventListener("click", function(dets){
    var clickNumber = Number(dets.target.textContent);
    if(clickNumber === rn){
        scorebuild();
        makeBubble();
        gethit();
    }
});

// Function to initialize the start button
function initializeStartButton() {
  document.querySelector("#panel-bttm").innerHTML = `
    <button id="startBtn">Start Game</button>`;
  
  // Add event listener to the start button
  document.querySelector("#startBtn").addEventListener("click", startGame);
}

// Initialize the game with the start button
initializeStartButton();

// Event listener for restart button
document.querySelector("#restartBtn").addEventListener("click", resetGame);
