class Mouse {
  constructor(ctx,url) {
    this.ctx = ctx,
    this.type = "mouse",
    this.img = new Image(),
    this.img.src = url,
    this.x = 200,
    this.y = 200,
    this.height = 65,
    this.width = 65;

  }

update() {
this.x 
this.y 
}

  
draw() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }



}


// class Mouse {
//   constructor(ctx, url) {
//     this.ctx = ctx;
//     this.img = new Image();
//     this.img.src = url;
//     this.x = 200;
//     this.y = 210;
//     this.height = 65;
//     this.width = 65;
//     // this.movementX = null;
//     // this.movementY = null;
//     // this.lives = 10
//   }



//   draw() {
//     ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
//   }

// }
