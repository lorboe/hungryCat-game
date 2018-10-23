var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;
var dx = 5;
var dy = 5;
var frames = 0;

var bg = new Background(ctx, "../Images/memphis-colorful.png", 2);
var cat = new Cat(ctx, "../Images/_cute.png");

//array of obstacles that randomlly appear on the screen
var randomObsArr = [];
var obstaclesType = ["dog", "food", "person"];

// var obstacle = 0;
// randomObsArr.forEach(function(obstacle) {
//   obstacle = obstacle;
// });

var interval = setInterval(function() {
  update();
  drawEverything();
}, 1000 / 60);

//updating the canvas with all the functions
function update() {
  bg.update();
  cat.update();
  randomObsArr.forEach(function(obstacle) {
    obstacle.update();
  });
  frames++;
  if (frames % 80 === 0) {
    console.log("Creating a new obstacle", frames);
    randomObsArr.push(
      new Obstacle(
        ctx,
        obstaclesType[Math.floor(Math.random() * obstaclesType.length)],
        y
      )
    );
  }
  hitDetection(cat);
  //if (getDistance(cat.x, cat.y, obstacle.x, obstacle.y) < 0) {}
}

//Drawing the elements on the canvas
function drawEverything() {
  ctx.clearRect(0, 0, x, y);
  bg.draw();
  randomObsArr.forEach(function(obstacle) {
    obstacle.draw();
  });
  cat.draw();
}

//Moving the cat

$(document).keydown(function(event) {
  event.preventDefault();
  console.log("keydown", event.keyCode);
  switch (event.keyCode) {
    case 37:
      cat.movementX = "left";
      break;
    case 39:
      cat.movementX = "right";
      break;
    case 38:
      cat.movementY = "up";
      break;
    case 40:
      cat.movementY = "down";
      break;
  }
});

$(document).keyup(function(event) {
  event.preventDefault();
  console.log("keyup", event.keyCode);
  switch (event.keyCode) {
    case 37:
    case 39:
      cat.movementX = null;
      break;
    case 38:
    case 40:
      cat.movementY = null;
      break;
  }
});

//hit detection

//checking collision
// function checkCollision(a, b) {
//   return (
//     Math.abs(a.x - b.x) <= a.width ||
//     (b.width && Math.abs(a.y - b.y) <= a.height) ||
//     b.height
//   );
//   console.log("collision");
// }

//checking distance to detect collision
// function getDistance(x1, y1, obstacleX, obstacleY) {
//   distanceX = obstacleX - x1;
//   distanceY = obstacleY - y1;
//   return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
// }

function hitDetection(a) {
  for (var i = 0; i < randomObsArr.length; i++) {
    var e = randomObsArr[i];
    if (
      a.x < e.x + e.width &&
      a.x + a.width > e.x &&
      a.y < e.y + e.height &&
      a.y + a.height > e.y
    ) {
      console.log("HELLO");
    }
  }
}

function stop() {
  clearInterval(interval);
}
