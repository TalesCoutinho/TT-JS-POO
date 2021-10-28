let particulas = [];

function setup() {
  createCanvas(400, 400);
  for(let i=0; i<80; i++){
    let aleatorio = random(0,1);
    if(aleatorio < 0.33){
    particulas[i] = new Particula(200, 200, 5);
    }
    if(aleatorio >= 0.33 && aleatorio < 0.66){
      particulas[i] = new Quadrado(200, 200, 8);
    }
    if(aleatorio >= 0.66){
      particulas[i] = new Triangulo(200, 200, 12);
    }
  }
}

function draw() {
  background(0);
  for(let p of particulas){
    p.mover();
    p.aparecer();
  }
}