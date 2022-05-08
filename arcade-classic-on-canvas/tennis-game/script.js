let canvas;
let canvasContext;

window.onload = function () {
  console.log("hola");
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(200, 200, 50, 25);
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(canvas.width /2 - 20 , canvas.height / 2 - 20 , 40, 40); // centered on the screen
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(350, 300, 50, 35); // the red box overlaps the white one because it was 'drawn' later
};
