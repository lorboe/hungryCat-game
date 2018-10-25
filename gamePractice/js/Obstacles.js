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
      case "dog2":
        this.img.src = "../Images/DalmatianCartoonDog.png";
        break;
    }
    this.x = x + 10;
    this.y = Math.floor(Math.random() * y);
    this.height = 65;
    this.width = 65;
    this.isTouched = false;
  }

  update() {
    this.x -= 2.5;

    if (score >= 50 < 100) {
      this.x -= 3.5
    }

    if (score >= 100) {
      this.x -= 4.5
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }



}
