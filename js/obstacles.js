class Obstacle {
  constructor(ctx, type, y) {
    (this.ctx = ctx),
      //this.type = type,
      (this.img = new Image()),
      (this.type = type);
    switch (this.type) {
      case "dog":
        this.img.src = "../images-folder/brown-dog.png";
        break;
      case "food":
        this.img.src = "../images-folder/food-meat-gumbo.png";
        break;
      case "dog2":
        this.img.src = "../images-folder/dalmatian-dog.png";
        break;
    }
    this.x = x + 10;
    this.y = Math.floor(Math.random() * canvas.height*0.87);
    this.height = 65;
    this.width = 65;
    this.isTouched = false;
  }

  update() {
    this.x -= 3.5;

    if (score >= 30 && score < 60) {
      this.x -= 4
    }

    if (score >= 60 && score < 100) {
      this.x -= 5
    }

    if (score >= 100 && score < 150) {
      this.x -= 5.5
    }

  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }



}
