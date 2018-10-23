var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;
var dx = 5;
var dy = 5;
var frames = 0;

var bg = new Background(ctx, "../Images/memphis-colorful.png", 2);
var cat = new Cat(ctx, "../Images/_cute.png");
// var dog = new Obstacle (ctx, "../Images/lemmling-Cartoon-dog-Laughing.png",y)
// var food = new Obstacle (ctx,"../Images/food-meat-gumbo.png")
// var person = new Obstacle (ctx, "../Images/pirate-baby.png")
//var frame
var randomObsArr = [];
var obstaclesType = ["dog", "food", "person"];

setInterval(function() {
  update();
  drawEverything();
}, 1000 / 60);

function update() {
  bg.update();
  cat.update();
  randomObsArr.forEach(function(obstacle) {
    obstacle.update();
  });
  frames++;
  // for (var i = 0; i < randomObsArr; i++) {
  //   randomObsArr.push(obstacles[Math.random() * obstacles.length])
  //   randomObsArr.update()
  // }
  if (frames % 100 === 0) {
    console.log("Creating a new obstacle", frames);
    randomObsArr.push(
      new Obstacle(
        ctx,
        obstaclesType[Math.floor(Math.random() * obstaclesType.length)],
        y
      )
    );
  }
}
//   randomObsArr.push(obstacles[Math.random() * obstacles.length])
// }
// for (i = 0; i < randomObsArr.length; i++) {
//   randomObsArr[i].x += +1;
//   randomObsArr[i].update();
// }

function drawEverything() {
  ctx.clearRect(0, 0, x, y);
  bg.draw();
  cat.draw();
  randomObsArr.forEach(function(obstacle) {
    obstacle.draw();
  });
}

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
