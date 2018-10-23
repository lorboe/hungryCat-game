class Obstacle {
    constructor (ctx,url){
      this.ctx = ctx,
      //this.type = type,
      this.img = new Image(),
      this.img.src = url,
      this.x = x+10
      this.y = Math.random() * y 
      this.height = 70
      this.width = 70
  

    }
update (){
this.x -= 2
}

draw () {
  // for (var i = 0; this.x + i * this.width < this.ctx.canvas.width; i++)  {
  //   ctx.drawImage(this.img,this.x + i * this.width - i, 0, this.width, this.height)
 ctx.drawImage(this.img,this.x,this.y,this.width, this.height);
//ctx.drawImage(this.img,this.x,this.y+70,this.width, this.height);
// }

 }
    
}

