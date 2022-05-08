let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 5;
let radius = 5;

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
  ballY = ballY + ballSpeedY;

  if (ballX > canvas.width) {
    ballSpeedX = -1 * ballSpeedX;
  }
  if (ballX < 0) {
    ballSpeedX = -1 * ballSpeedX;
  }

  if (ballY > canvas.height) {
    ballSpeedY = -1 * ballSpeedY;
  }
  if (ballY < 0) {
    ballSpeedY = -1 * ballSpeedY;
  }
}

function drawEverything() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorCircle(ballX, ballY, radius, "yellowgreen");
  colorRect(5, canvas.height / 2 - 50, 10, 100, "white");
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

function colorCircle(leftX, topY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(leftX, topY, radius, 0, 2 * Math.PI)
  canvasContext.fill();
}
