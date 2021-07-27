var bgImg;
var x1 = 0;
var x2;
var shipImage
var ship
var scrollSpeed = 5;

function preload(){
  bgImg = loadImage("sea.png");
  shipImage = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
}

function setup() { 
  createCanvas(400, 400);
  ship = createSprite(100,200)
  ship.addAnimation('ship',shipImage)
  ship.scale = 0.15
  x2 = width;
} 

function draw() { 
	image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);
  
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  drawSprites();
}