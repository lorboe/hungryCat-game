class Obstacle {
    constructor (ctx, type) {
   this.ctx = ctx
  //  this.img = new Image()
  //  this.url = url 
   this.type = type
   this.height = 65
   this.width = 65
   this.x = Math.random() * x
   this.y = Math.random()*y
  //   var yArray = [0,5,10,15,20,25,30,35,40]
  //   this.y = Math.random() * yArray.length 
  //   console.log(this.y)
  //  }
 // this.x = 200
  //this.y = 200

}
update (){
this.x -= 1
}

draw () {
 // ctx.drawImage(this.img,this.x,this.y,this.width, this.height);
 ctx.fillRect(this.x,this.y, 50, 50)
}
    
}

