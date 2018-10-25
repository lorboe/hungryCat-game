class Cat {
  constructor(ctx, url) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = url;
    this.x = 0;
    this.y = 210;
    this.height = 65;
    this.width = 65;
    this.movementX = null;
    this.movementY = null;
    this.lives = 3
  }

  update() {
    if (this.movementX) {
      var delta = this.movementX === "right" ? 1 : -1.8;
      this.x += delta * dx;
      if (this.x <= 0) this.x = 0;
      if (this.x + this.width > x) this.x = x - this.width;
    }
    if (this.movementY) {
      var delta2 = this.movementY === "up" ? 1 : -1;
      this.y -= delta2 * dy;
      if (this.y <= 0) this.y = 0;
      if (this.y + this.height > y) this.y = y - this.height;
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  didCollide(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width-5);
    var mytop = this.y;
    var mybottom = this.y + (this.height-5);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width-5);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height-5);
    var crash = true;
    if ((mybottom < othertop) ||
           (mytop > otherbottom) ||
           (myright < otherleft) ||
           (myleft > otherright)) {
       crash = false;
    }
    return crash;
}
}
