/*
  Classwork
*/
var circleX = 0;
var circleY = 0;
var speed1 = 5;
var speed2 = 5;
var circleColor = "blue";

function setup(){
  createCanvas(windowWidth,windowHeight);

}

function draw(){

background("white");

  fill("lavender");
    if(mouseIsPressed){
      fill(circleColor);

}

  ellipse(circleX,350,100,100);

  circleX = circleX + speed1;

    if(circleX >= width){
      speed1 = -5;
    }

    if (circleX <= 0){
      speed1 = 5;
    }

  ellipse(650,circleY,100,100);

  circleY = circleY + speed2;

    if(circleY >= height){
      speed2 = -5;
    }

    if (circleY <= 0){
      speed2 = 5;
    }

}
