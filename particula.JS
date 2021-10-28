class Particula{
    constructor(x, y, raio){
      this.x = x;
      this.y = y;
      this.raio = raio;
      this.R = 122;
      this.G = 122;
      this.B = 122;
      this.color = color(this.R,this.G,this.B);
    }
    mover(){
        this.x += random(-2,2);
        this.y += random(-2,2);
        this.R += random(-2,2);
        this.G += random(-2,2);
        this.B += random(-2,2);
        this.color = color(this.R,this.G,this.B);
    }
    aparecer(){
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.raio);
    }
  }