let falling = true;
let gravity = 10;
let circleX = 100;
let circleY = 100;
let circleR = 20;
let velocity = 0;
let acc = 0.2;
let name = ""
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let button;


let checkbox;
var submitted = false;
function setup() {
  createCanvas(710, 400);
  textSize(15);
  checkbox = createCheckbox('Finished', false);
  checkbox.changed(myCheckedEvent);
  button = createButton('clear');
  button.position(76, 400);
  button.mousePressed(clearName);
}

function clearName(){
  name = "";
}
function draw() {
  background(100);
  noStroke();
  fill(255, 204, 4);
  if (submitted == false){
  circleY += velocity;
  velocity += acc;

  if (circleY+circleR/2 >= 300){
    falling = false;
    if (velocity != 0){
      velocity = -velocity+2;
  };
  };
  if (circleY+circleR/2 > 300){
    circleY = 300-circleR/2;
  }
  if (velocity <= 0.2 && velocity > 0 && circleY+circleR/2 >= 300){
    velocity = 0;
    acc = 0;
  }
  if (circleY+circleR/2 >= 300){
     name += position_to_letter(circleX)
     if (name.length > 15){
       name = ""
     }
  }
  textAlign(CENTER);

  mass_draw()
  ellipse(circleX, circleY, circleR, circleR);
  rect(0, 300, width, 10);
}
text(name, width/2, height-10);
}

function mousePressed() {
  if (mouseY < 300){
    circleX = mouseX;
    circleY = mouseY;
    falling = false;
    velocity = 0;
    acc = 0;
}
}

function mouseDragged() {
  if (mouseY < 300){
  if (circleY+circleR < 300){
    circleX = mouseX;
    circleY = mouseY;
  }}

}
function mouseReleased() {
  if (submitted == false){
    falling = true;
    velocity = 0;
    acc = 0.2;

}}

function mass_draw(){
  for (i=0; i < alphabet.length; i++){
    let letterX = (width/alphabet.length)*i;
    let letterY = 260;
    letterX = parseInt(letterX)

    text(alphabet[i], letterX, letterY);
  }
}

function position_to_letter(position){
  let floatIndex = (position/width)*(alphabet.length);
  let index = parseInt(floatIndex);
  return alphabet[index]
}

function myCheckedEvent() {
  if (this.checked()) {
    submitted = true;
    letterX = 300
    letterY = 0;
    acc = 0;
    falling = false;
    velocity = 0;
  } else {
    submitted = false;
    acc = 0.1;
    falling = true;
    velocity = 0;
  }
}
