let drops = [];

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i<50;i++){ addInk(random(width),random(height),50);}
 
  
}

function tineline(xl,z,c){
for(let drop of drops){
  drop.tine(xl,z,c)
}
}



function addInk(x,y,r){
  let drop = new Drop(x,y,r);

for(let other of drops){
  other.marble(drop);
}
drops.push(drop);
}

function draw() {
  // let x = random(width);
  // let y = random(height);
  // let r = random(10, 10);
  // addInk(x,y,r);
  if(mouseIsPressed){
    tineline(mouseX,4,8)
  }
  background(220);
  for (let drop of drops){
    drop.show();
  }
}
