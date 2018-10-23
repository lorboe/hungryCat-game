var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var x = canvas.width
var y = canvas.height 
var dx = 5
var dy = 5

var bg = new Background (ctx, "../Images/memphis-colorful.png",2) 
var cat = new Cat (ctx, "../Images/_cute.png")
//var dog = new Obstacle (ctx, "../Images/lemmling-Cartoon-dog-Laughing.png" , dog)
var dog = new Obstacle(ctx, dog)

setInterval(function() {
update()
drawEverything()
}, 1000/60)


  function update () {
    bg.update()
    cat.update()
    dog.update()
  }

  function drawEverything() {
    ctx.clearRect(0,0, x, y);
    bg.draw()
    cat.draw()
    dog.draw()
  }

  $(document).keydown(function(event){
    event.preventDefault()
    console.log("keydown",event.keyCode)
    switch(event.keyCode) {
      case 37:
        cat.movementX = "left"
        break
      case 39:
        cat.movementX = "right"
        break
      case 38:
      cat.movementY = "up"
      break
      case 40:
      cat.movementY = "down"
      break  
    }
  })

  $(document).keyup(function(event){
    event.preventDefault()
    console.log("keyup",event.keyCode)
    switch(event.keyCode) {
      case 37:
      case 39:
        cat.movementX = null
        break
    case 38:
    case 40:
        cat.movementY = null
        break
    }
  })