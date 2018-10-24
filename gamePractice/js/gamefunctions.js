var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;
var dx = 5;
var dy = 5;
var frames = 0;
var bg = new Background(ctx, "../Images/memphis-colorful.png", 2);
var cat = new Cat(ctx, "../Images/_cute.png");
var randomObsArr = []; //array of obstacles that randomlly appear on the screen
var obstaclesType = ["dog", "food", "person", "food"]; //possible types of obstacles that determine the image to display
var score = 0 



var interval = setInterval(function() {
  update();
  drawEverything();
}, 1000 / 60);

//updating the canvas with all the functions
function update() {
  console.log(randomObsArr.length)
  bg.update();
  cat.update();
  randomObsArr.forEach(function(obstacle) {
    obstacle.update();
    if(cat.didCollide(obstacle)){
      if(obstacle.type === "food"){
        score +=5
        obstacle.isTouched = true

      } else {
        // console.log( "MIAU")
      }
    }
  });

  randomObsArr.forEach((obj,index) => {
    if(obj.isTouched || obj.x < 0 - obj.width){
      randomObsArr.splice(index,1)
    }

  })


  frames++;
  if (frames % 80 === 0) {
    console.log("Creating a new obstacle", frames);
    randomObsArr.push(
      new Obstacle(ctx, obstaclesType[Math.floor(Math.random() * obstaclesType.length)],y)
    );
  }
  
}



//Drawing the elements on the canvas
function drawEverything() {
  ctx.clearRect(0, 0, x, y);
  bg.draw();
  randomObsArr.forEach(function(obstacle) {
    obstacle.draw();
  });
  cat.draw();

ctx.font = "18px comic sans";
ctx.fillStyle = "purple";
ctx.fillText("Score: " + score, 700, 30)
}

//Moving the cat (main player)
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



function stop() {
  clearInterval(interval);
}


function startGame() {
  myGameArea.start();
}

 