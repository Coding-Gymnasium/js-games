/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 5;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = './assets/enemy4.png';
    this.speed = Math.random() * 1.5 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = Math.floor(Math.random() * (canvas.height - this.height));
    this.newX = Math.floor(Math.random() * (canvas.width - this.width));
    this.newY = Math.floor(Math.random() * (canvas.height - this.height));
    this.frame = 0;
    this.flaspSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 100);
  }
  update() {
    canvas.addEventListener('mousemove', (e) => {
      this.x = e.clientX - 200;
      this.y = e.clientY - 200;
    });

    if (gameFrame % 200 === 0) {
      this.newX = Math.floor(Math.random() * (canvas.width - this.width));
      this.newY = Math.floor(Math.random() * (canvas.height - this.height));
    }

    let dx = this.x - this.newX;
    let dy = this.y - this.newY;

    this.x -= dx / 10;
    this.y -= dy / 10;

    if (this.x + this.width < 0) this.x = canvas.width;
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
