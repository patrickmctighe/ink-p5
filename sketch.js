let drops = [];

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
let drop = new Drop(mouseX, mouseY, 50);

for(let other of drops){
  drop.marble(other);
}
drops.push(drop);
}

function draw() {
  background(220);
  for (let drop of drops){
    drop.show();
  }
}
