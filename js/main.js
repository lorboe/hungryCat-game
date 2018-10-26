let paused = true;
let refreshed = false;
var currLife;
var gameStopped = false;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;
var dx = 5;
var dy = 5;
var frames = 0;
var bg = new Background(ctx, "./images-folder/memphis-colorful.png", 2);
var cat = new Cat(ctx, "./images-folder/main-cat.png");
var randomObsArr = []; //array of obstacles that randomlly appear on the screen
var obstaclesType = ["dog", "food", "dog2", "food"]; //possible types of obstacles that determine the image to display
var score = 0;
var lives = cat.lives;
var miceArray = [];
var startInterval

window.onload = function() {
  startInterval = setInterval(() =>{
    bg.update()
    bg.draw()
  },1000/50
  )

document.getElementById("start-game").onclick = function () {
clearInterval(startInterval)
    if (paused){
    $("canvas").show("slow");
    $(".starting-page").hide();
    $("#intructiontext").hide("slow");
    $("#start-game").html("Pause");
    togglePause();
  } else if (!paused){
    $("#start-game").html("Resume");
    togglePause();
  }
    if (currLife <= 0){
    gameStopped = true 
    stopGame() 
     console.log("stopping game")
     
    }
      else {startGame()};
  }

;

function startGame() {
  if (!refreshed) {
    toggleRefresh();
    startGameInterval = setInterval(function() {
      drawEverything();
      if (!paused) {
    if(currLife <=0){
       stopGame() //: update();
      }  else { update() };
      }
    }, 1000 / 60);
  }
}
};

function togglePause() {
  if (!paused && !gameStopped) {
    paused = true;
  } else if (paused) {
    paused = false;
  }
}

function toggleRefresh() {
  if (!refreshed) {
    refreshed = true;
  } else if (paused) {
    refreshed = false;
  }
}

function stopGame() {
 clearInterval(startGameInterval)
  bg.draw()
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 300, 150, 200, 200);
  };
   img.src ="./images-folder/angel-cat.png";
   ctx.fillStyle = "black"
   ctx.font = "40px Gloria Hallelujah";
   ctx.fillText("Meow!", 200, 100);
   setTimeout(function()
   { PlayAudioEnd()}, 1000); 

    return

  }

//updating the canvas with all the functions
function update() {
if (gameStopped) {
  return
}
  
  //console.log(randomObsArr.length)
  bg.update();
  cat.update();
  //mouse.update();
  //obstacles appear on the screen and collision with the cat is checked
  randomObsArr.forEach(function(obstacle) {
    obstacle.update();
    if(cat.didCollide(obstacle)){
      obstacle.isTouched = true
      if(obstacle.type === "food"){
        PlayAudioFood()
        score +=5
      } else {
        playAudioHit()
        lives--
        currLife = lives
        //console.log( "MIAU")
      }
    }
    //if you miss the food you also lose a life
    // if(obstacle.x < 0-obstacle.width) {
    //   lives--
    //   currLife = lives
    // }
  });

  //obstacles are removed from the array if they leave the canvas
  randomObsArr.forEach((obj,index) => {
    if(obj.isTouched || obj.x < 0 - obj.width){
      randomObsArr.splice(index,1)
    }

  })


//filling the obstacles and mice array
  frames++;
  if (frames % 80 === 0) {
    //console.log("Creating a new obstacle", frames);
    randomObsArr.push(
      new Obstacle(ctx, obstaclesType[Math.floor(Math.random() * obstaclesType.length)],y)
    );
    //creating miceon the screen
  if (score >= 10){
    miceArray.push( 
      new Mouse(ctx,"./images-folder/white-mouse-pic.png")
    );
  }

  }
  //updating the mice
  miceArray.forEach(function(mouse) {
    mouse.update()
  })

}


//Drawing the elements on the canvas
function drawEverything() {
  ctx.clearRect(0, 0, x, y);
  bg.draw();
  randomObsArr.forEach(function(obstacle) {
    obstacle.draw();
  });
  cat.draw();
  miceArray.forEach(function(mouse) {
    mouse.draw();
  });
 
  

ctx.font = "18px Gloria Hallelujah"
ctx.fillStyle = "purple";
ctx.fillText("Score: " + score, 700, 30)

ctx.font = "18px Gloria Hallelujah"
ctx.fillStyle = "red";
ctx.fillText("Lives: " + lives, 700, 60)

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
    case 32:
      miceArray = [];
      PlayAudioScare()
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

window.addEventListener("keydown", function(e) {
  var key = e.keyCode;
  if (key === 80) {
    // p key
    togglePause();
  }
});

function playAudioHit(){
  var audio = new Audio("./audio/zapsplat_cartoon_voice_high_pitched_says_ouch_001_15792.mp3");
  audio.play();
}

function PlayAudioFood() {
  var audio = new Audio("./audio/animals_cat_meow_003.mp3");
  audio.play();
}

function PlayAudioScare() {
  var audio = new Audio("./audio/zapsplat_human_child_boy_8_english_says_go_away_16257.mp3");
  audio.play();
}

function PlayAudioEnd() {
  var audio = new Audio ("./audio/cat-meowing-soundBible.com-781322082.wav")
  audio.play()
}

