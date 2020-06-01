export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;

    this.maxSpeed = 10;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x += this.speed;
  }
}
