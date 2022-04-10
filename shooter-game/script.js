const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let timeToNextRaven = 0;
let ravenInterval = 500;
let lastTime = 0;

let ravens = [];
class Raven {
  constructor(){
    this.spriteWidth = 271;
    this.spriteHeight = 194;
    this.width = this.spriteWidth/2;
    this.height = this.spriteHeight/2;
    this.x = canvas.width;
    this.y = Math.random() * (canvas.height - this.height);
    this.directionX = Math.random() * 5 + 3;
    this.directionY = Math.random() * 5 - 2.5;
    this.markForDeletion = false;
    this.image = new Image();
    this.image.src = './assets/raven.png';
  }

  update() {
    this.x -= this.directionX;
    if (this.x < 0 - this.width) this.markForDeletion = true;
  }
  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    // ctx.drawImage(this.image, sourcex, sourcey, sourcew, sourceh, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
}
const raven = new Raven();

function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let deltatime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextRaven += deltatime;
  if (timeToNextRaven > ravenInterval) {
    ravens.push(new Raven());
    timeToNextRaven = 0;
  };
  [...ravens].forEach(object => object.update());
  [...ravens].forEach(object => object.draw());
  ravens = ravens.filter(object => !object.markForDeletion);
  requestAnimationFrame(animate);
}
animate(0);
