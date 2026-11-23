let ballX = 100;
let ballY = 200;
let ballRadius = 25;
let speedX = 4;
let isPaused = false;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(30);

  // Draw the ball
  fill(56, 189, 248);
  noStroke();
  ellipse(ballX, ballY, ballRadius * 2);

  // Move the ball horizontally
  if (!isPaused) {
    ballX = ballX + speedX;
  }

  // Bounce when hitting the right or left edge
  if (ballX + ballRadius >= width || ballX - ballRadius <= 0) {
    speedX = speedX * -1;
  }

  // Display controls and live coordinates on canvas
  fill(255);
  textSize(14);
  text("Click mouse to Pause/Resume | Press UP/DOWN for Speed", 15, 25);
  text("ballX: " + ballX + " | speedX: " + speedX, 15, 380);
}

function mousePressed() {
  isPaused = !isPaused;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    speedX = speedX > 0 ? speedX + 2 : speedX - 2;
  } else if (keyCode === DOWN_ARROW) {
    if (abs(speedX) > 2) {
      speedX = speedX > 0 ? speedX - 2 : speedX + 2;
    }
  }
}
