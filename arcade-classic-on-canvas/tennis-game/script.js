let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 5;
let radius = 5;
let paddle1Y;
let paddle2Y;
const paddleHeight = 100;
const paddleThickness = 10;

function calculateMousePos(e) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = e.clientX - rect.left - root.scrollLeft;
  let mouseY = e.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY,
  };
}

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 30;
  paddle1Y = canvas.height / 2 - 50;
  paddle2Y = canvas.height / 2 - paddleHeight / 2;

  setInterval(() => {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);

  canvas.addEventListener("mousemove", function (e) {
    let mousePos = calculateMousePos(e);
    paddle1Y = mousePos.y - paddleHeight / 2;
  });
};

function ballReset() {
  ballSpeedX = -1 * ballSpeedX;
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
}

function computerMovement() {
  let paddle2YCenter = paddle2Y + (paddleHeight/2);
  if(paddle2YCenter < ballY - 35) {
    paddle2Y += 6;
  } else if (paddle2YCenter > ballY + 35){
    paddle2Y -= 6;
  } 
}

function moveEverything() {
  computerMovement();

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX < 0 || ballX > canvas.width) {
    ballReset();
  }

  if (ballX < paddleThickness + 5 && ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
    ballSpeedX = -1 * ballSpeedX;
  }

  if (ballX > canvas.width - ( paddleThickness + 5 ) && ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
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
  colorRect(5, paddle1Y, paddleThickness, paddleHeight, "white");
  colorRect(canvas.width - 15, paddle2Y, paddleThickness, paddleHeight, "white");
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

function colorCircle(leftX, topY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(leftX, topY, radius, 0, 2 * Math.PI);
  canvasContext.fill();
}
