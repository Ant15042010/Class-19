var movesq,stillsq;
function setup() {
  createCanvas(800,400);
  movesq = createSprite(400, 200, 50, 50);
  stillsq = createSprite(400, 200, 50, 50);
  movesq.shapeColor = rgb(37,173,201);
  stillsq.shapeColor = rgb(37,173,201);
}

function draw() {
  background(255,255,255);
  movesq.y = mouseY;
  movesq.x = mouseX;
  if (movesq.x-stillsq.x<movesq.width/2+stillsq.width/2 && movesq.y-stillsq.y<movesq.height/2+stillsq.height/2 && stillsq.x-movesq.x<movesq.width/2+stillsq.width/2 && stillsq.y-movesq.y<movesq.height/2+stillsq.height/2){
    movesq.shapeColor = rgb (255,134,13);
    stillsq.shapeColor = rgb (255,134,13);
  }
  else{
    movesq.shapeColor = rgb(37,173,201);
    stillsq.shapeColor = rgb(37,173,201);
  }
  drawSprites();
}