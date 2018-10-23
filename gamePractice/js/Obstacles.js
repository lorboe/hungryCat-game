class Obstacle {
  constructor(ctx, type, y) {
    (this.ctx = ctx),
      //this.type = type,
      (this.img = new Image()),
      (this.type = type);
    switch (this.type) {
      case "dog":
        this.img.src = "../Images/lemmling-Cartoon-dog-Laughing.png";
        break;
      case "food":
        this.img.src = "../Images/food-meat-gumbo.png";
        break;
      case "person":
        this.img.src = "../Images/pirate-baby.png";
        break;
    }
    this.x = x + 10;
    this.y = Math.floor(Math.random() * y);
    this.height = 62;
    this.width = 62;
    this.isTouched = false;
  }

  update() {
    this.x -= 2;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
