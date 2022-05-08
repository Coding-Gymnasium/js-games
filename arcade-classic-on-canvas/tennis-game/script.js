let canvas;
let canvasContext;
let ballX = 50;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  setInterval(drawEverything, 1000);
};

function drawEverything() {
  ballX = ballX + 10;

  console.log(ballX)
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(200, 200, 50, 25);
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(canvas.width /2 - 20 , canvas.height / 2 - 20 , 40, 40); // centered on the screen
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(50, 300, ballX, 50); // the red box overlaps the white one because it was 'drawn' later
}
