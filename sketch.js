var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  createCanvas(400,400);
  
  //make garden background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //create rabbit sprite
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprite = Math.round(random(1,2));

  if(frameCount % 80 === 0)
  {
    if(select_sprite === 1)
    {
        createApples();
    }
    else
    {
        createLeaf();
    }
  }

  drawSprites();
}

function createApples(){
  if(frameCount % 80 === 0){
    apple = createSprite(random(50,350),40,10,10);
    apple.velocityY = 0.8;
    
    apple.addImage(appleImg);
    apple.scale = 0.07;

    rabbit.depth = apple.depth + 1;
  }
}

function createLeaf(){
  if(frameCount % 80 === 0){
    leaf = createSprite(random(50,350),40,10,10);
    leaf.velocityY = 0.8;
    
    leaf.addImage(leafImg);
    leaf.scale = 0.07;

    rabbit.depth = leaf.depth + 1;
  }
}