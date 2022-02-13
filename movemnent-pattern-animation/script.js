/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 100;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = './assets/enemy1.png';
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
    this.flaspSpeed = Math.floor( Math.random() * 3 + 1 );
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
    //animate sprites.
    if (gameFrame % this.flaspSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  for (const enemy of enemiesArray) {
    enemy.update();
    enemy.draw();
  }
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
