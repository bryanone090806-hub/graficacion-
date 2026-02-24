console.log("hola")
function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(255);

  // Verde
  fill(0, 104, 71);
  rect(0, 0, width / 3, height);

  // Blanco
  fill(255);
  rect(width / 3, 0, width / 3, height);

  // Rojo
  fill(206, 17, 38);
  rect(2 * width / 3, 0, width / 3, height);

  // Escudo simplificado
  fill(139, 69, 19); // color café
  ellipse(width / 2, height / 2, 80, 80);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Escudo", width / 2, height / 2);
}