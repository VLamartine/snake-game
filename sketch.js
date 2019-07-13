let snake;
let grid;
let food;
const cellSize = 10;

function setup() {
  createCanvas(600, 600);
  frameRate(15);
  grid = Array(width / cellSize);
  for (let i = 0; i < grid.length; ++i) {
    grid[i] = Array(height / cellSize);
  }

  snake = new Snake();
  food = new Food();

  food.setFood();
}

function draw() {
  background(51);
  food.draw();
  snake.move();

  if (snake.checkGameOver()) {
    snake.startSnake();
  } else if (snake.checkEating()) {
    snake.eat();
  }
  snake.draw();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDirection(createVector(-1, 0));
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDirection(createVector(1, 0));
  } else if (keyCode === UP_ARROW) {
    snake.setDirection(createVector(0, -1));
  } else if (keyCode === DOWN_ARROW) {
    snake.setDirection(createVector(0, 1));
  }
}