class Boy {
    constructor(x,y) {
      var options = {
          'friction':1,
          'density':1.5,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, 4, 4, options);
      this.width = 300;
      this.height = 400;
      this.image = loadImage("boy.png");
      
      World.add(world, this.body);
    }
    display(){
      var a =this.body.position;
      push();
      translate(a.x,a.y);
      strokeWeight(4);
      stroke("blue");
      fill("red");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }