var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 100, 50, 80);
  movingRect = createSprite(800,100,80,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.velocityX = 5;
  movingRect.velocityX = -5;
}

function draw() {
  background(255,255,255);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
    {
fixedRect.velocityX = fixedRect.velocityX*(-1);
movingRect.velocityX = movingRect.velocityX*(-1);
    }
    if( movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {
    fixedRect.velocityY= fixedRect.velocityY*(-1);
    movingRect.velocityY = movingRect.velocityY*(-1);
}
  drawSprites();
}