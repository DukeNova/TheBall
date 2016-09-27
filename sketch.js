var x = 50;
var y = 50;
var speed = 4;

var c;

function setup() {
  createCanvas(800,400);
  c = color(255,255,255);
}

function draw() {
  background(300, 255, 155);
  fill(0);
  noStroke();
  
  text("here you go friend :" + x,200,20)
  rect(x,y,100,100);

}

  if(x <= width + 10){
    speed = speed * -1;
  }
  
  if(x <= 0){
    speed = speed * -1;
  
  x = x + speed;
}

function mousePressed(){
    c = color(random(255), random(255), random(255));
  }

function keyPressed(){
  speed = 100;
}
