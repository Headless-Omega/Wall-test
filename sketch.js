var bullet, wall;
var speed, weight;
var damage, thickness;
var step1, step2, step3, step4, step5;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22, 83);
  wall=createSprite(700, 200, thickness, height/2);
  bullet = createSprite(50,200,50,50);

  damage=0;

  wall.shapeColor="green";

  step1=speed^2;
  step2=speed*weight;
  step3=step2/2;
  step4=thickness*thickness;
  step5=step4*thickness;


  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet, wall)){
    damage= step5;
    bullet.velocityX=0;
    if(damage<10){
      wall.shapeColor="green";
    }
    if(damage>10){
      wall.shapeColor="red";
    }
  }
  drawSprites();  
}

function hasCollided(bullet1, wall1){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
  return true;
  }
  return false;
}
function reset(){
  speed=random(223,321);
  weight=random(30,52);
  damage=0;
  thickness = random(22, 83);
  bullet.x=50;
  wall.shapeColor="green";
}
