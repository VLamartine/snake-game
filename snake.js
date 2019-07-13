class Snake {
  constructor() {
    this.points = [];
    this.headIndex;
    this.direction;

    this.startSnake();
  }

  move() {
    const newPosition = p5.Vector.add(this.points[this.headIndex], this.direction);
    this.points.push(
      newPosition
    );

    this.points.shift();
  }

  draw() {
    stroke(255);
    fill("#BA55D3");

    this.points.forEach(point => {
      square(point.x * cellSize, point.y * cellSize, cellSize);
    });
  }

  setDirection(direction) {
    const addedDirection = p5.Vector.add(this.direction, direction);
    if (addedDirection.x == 0 && addedDirection.y == 0) {
      return;
    }
    this.direction = direction;
  }

  checkGameOver() {
    const head = this.points[this.headIndex];
    if (head.x < 0 || head.x > (width / cellSize) - 1 || head.y < 0 || head.y > (height / cellSize) - 1) {
      return true;
    }

    for (let i = 0; i < this.headIndex; ++i) {
      let point = this.points[i];
      if (head.x == point.x && head.y == point.y) {
        return true;
      }
    }
    return false;
  }

  eat() {
    this.points.push(food.position);
    this.headIndex++;

    food.setFood();
  }
  checkEating() {
    const head = this.points[this.headIndex];

    return head.equals(food.position);
  }
  checkFoodPositioningCollision() {
    for (point of this.points) {
      if (point.equals(food.position)) {
        return true;
      }
    }

    return false;
  }

  startSnake() {
    this.points = [
      createVector(1, 1),
      createVector(2, 1),
      createVector(3, 1),
      createVector(4, 1)
    ];
    this.headIndex = this.points.length - 1;

    this.direction = createVector(1, 0);
  }
}