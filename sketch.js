var ship;
var shipImg;
var bg;
var bgImg;
var floor;

function preload(){
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  bgImg = loadImage("sea.png");


}

function setup(){
  createCanvas(400,1000);
  bg = createSprite(200, 500, 400, 10);
  bg.addImage(bgImg);

  ship = createSprite(200, 550, 50, 10);
  ship.addAnimation("sailing", shipImg);
  ship.scale = 0.25;

  floor = createSprite(200, 700, 400, 10);
  floor.visible = false;
  
}

function draw() {
  background("blue");
  bg.velocityX = -10;
  if(bg.x < -1650){
    bg.x = bg.width/2;
  } 
  if(keyDown("space")&&ship.y >= 580) {
    ship.velocityY = -15;
  }
  ship.collide(floor);
  console.log(ship.y);
  ship.velocityY = ship.velocityY + 0.8;
  drawSprites();

 
}
