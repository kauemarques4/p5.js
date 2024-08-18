let palavra;

function setup() {
  createCanvas(400, 400);
   palavra = palavraAleatoria();
}
function palavraAleatoria() {
  let palavras = ["chucklenuts","think", "fast" ]; // escolha de palavra aleatoria
  return random(palavras);
}

function inicializaCores() {
  background("blue");
  fill("black");             //fumcao para iniciar as coisas do setup de forma otimizada
  textSize(64);
  textAlign(CENTER, 10);
}

function palavraParcial(minimo, maximo) {
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 201, 201); 
  return parcial;
}

function draw() {
  inicializaCores();

  let parcial = palavraParcial(0, width);
}

function lugaresLegaisTop10(diaDaSemana) {
  // retorna oq? (return)
  
}  