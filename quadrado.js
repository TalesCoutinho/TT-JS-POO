class Quadrado extends Particula{
    constructor(x, y, raio){
        super(x, y ,raio);
    }
    aparecer(){
        square(this.x, this.y, this.raio);
      }

}

class Triangulo extends Particula{
    constructor(x, y, raio){
        super(x, y, raio);
    }
    aparecer(){
        triangle(this.x, this.y, this.x, this.raio+this.y, this.x+this.raio, this.y);
    }
}