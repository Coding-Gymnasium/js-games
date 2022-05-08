let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = 5;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 30;
  setInterval(() => {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);
};

function moveEverything() {
  ballX = ballX + ballSpeedX;
  if (ballX > canvas.width) {
    ballSpeedX = -ballSpeedX
  }
  if (ballX < 0) {
    ballSpeedX = -1 * ballSpeedX;
  }
}

function drawEverything() {
  colorRect(0,0,canvas.width, canvas.height, 'black')
  colorRect(ballX, 100, 10, 10, 'yellowgreen')
  colorRect(5, canvas.height / 2 - 50, 10, 100, 'white')
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
