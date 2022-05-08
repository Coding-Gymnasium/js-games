let canvas;
let canvasContext;
let ballX = 50;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 30;
  setInterval(() => {
    moveEverything();
    drawEverything();
  }, 1000/framesPerSecond);
};

function moveEverything() {
  ballX = ballX + 5;
}

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(200, 200, 50, 25);
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(0 , canvas.height / 2 - 20 , 10, 100); // centered on the screen
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(ballX, 100, 10, 10);
}
