
var bg;
var bgImage;
var ironMan;
var imImage;

function preload() {
  bgImage = loadImage('images/bg.jpg');
  imImage = loadImage('images/iron.png');
}

function setup() {
  createCanvas(1000, 555);
  bg = createSprite(700,100);
  bg.addImage(bgImage);
  bg.scale = 1.2 ;
  
  ironMan = createSprite( 80, 470, 20, 50);
  ironMan.scale = 0.2;
  ironMan.addImage(imImage);
   
  ground = createSprite(85, 520, 1850,10);
}

function draw() {
  
if (keyDown("up")){
  ironMan.velocityY = -10;
}
if (keyDown("left")) {
  ironMan.x = ironMan.x - 5; 
}
if(keyDown("right")){
  ironMan.x = ironMan.x + 5;
}
if(ironMan.y<50){
  ironMan.y = 50
}
ironMan.velocityY = ironMan.velocityY + 0.5;

ground.visible = false;
ironMan.collide(ground);
  bg.velocityY = 6; 
if(bg.y > 300)
{
    bg.y = bg.height / 6 ;
}
    
 drawSprites();

   
}

