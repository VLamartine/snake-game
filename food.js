class Food {
  constructor() {
    this.position;
  }

  draw() {
    stroke("#25B325");
    fill("#FF69B4");

    square(this.position.x * cellSize, this.position.y * cellSize, cellSize)
  }
  setFood() {
    this.position = createVector(floor(random(width / cellSize)), floor(random(height / cellSize)));
    if (snake.checkFoodPositioningCollision()) {
      this.setFood();
    }
    console.log(this.position);
  }
}