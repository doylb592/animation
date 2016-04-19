/*
  Homework
*/

//===================
// variables
//===================

var hk;
var dd;

var movinghk = 0;
var movingdd = 560;

var speed1 = 5;
var speed2 = 9.5;

function preload(){
  london = loadImage("images/london.png");
  flowers = loadImage("images/flowers.jpg");
  hk = loadImage("images/hello_kitty.png");
  dd = loadImage("images/dear_daniel.png");
}

function setup(){
  createCanvas(london.width,london.height);
  frameRate(30);

}

//===================
// background
//===================

function draw(){
  if (mouseIsPressed){
    background(flowers,0,0,london.width,london.height);
  }
  else {
    background(london,0,0,london.width,london.height);
  }

//===================
// characters
//===================


   image(hk,movinghk,380);

   movinghk = movinghk + speed1;

      if(movinghk >= width - 190){
        speed1 = -5;
      }

      if (movinghk <= 0){
        speed1 = 5;
      }

    image(dd,movingdd, 315);

    movingdd = movingdd + speed2;

      if(movingdd >= width -250){
        speed2 = -5;
      }

      if (movingdd < -45){
        speed2= 5;
      }

  }
