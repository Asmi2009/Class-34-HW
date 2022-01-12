var pathImg, path;
var plantImg, plant, plantsGroup;
var girl, girlImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  pathImg = loadImage("path.png");
  plantImg = loadImage("c.png");
  girlImg = loadImage("girl.png");
  
}

function setup() {
  createCanvas(600, 400);
  path = createSprite(300,200);
  path.addImage(pathImg);
  path.velocityY = 1;
  path.scale=3;


  plantsGroup = new Group ()
  
  girl = createSprite(200,350,50,50);
  girl.addImage(girlImg);
  girl.scale = 0.2;
  girl.debug = true;
  girl.setCollider("rectangle",0,0,400,400);
}

function draw() {
  background(200);
  
console.log (path.y)

  if (gameState === "play") {
   if (path.y>300){
     path.y = 200
   }

  if (keyDown("right_arrow")){
  girl.x=girl.x+3;
  }
  if (keyDown("left_arrow")){
  girl.x=girl.x-3;
  }
  
  spawnplants()
  
  if (girl.isTouching(plantsGroup)|| girl.y>600){
  gameState = "end"
  }

  drawSprites()
}

if (gameState === "end") {

  girl.destroy ();
  textSize (30);
  fill ("red");
  text ("Game Over",230,250)
}

    
}

function spawnplants() {
  if (frameCount%60==0){
    plant = createSprite (random(120,400),-50);
   plant.addImage  (plantImg);
    plant.velocityY = 1;
    plant.lifetime = 800;
    girl.depth = plant.depth+1;
    plantsGroup.add(plant);
    plant.debug = true;
    plant.scale = 0.2;
  }

}