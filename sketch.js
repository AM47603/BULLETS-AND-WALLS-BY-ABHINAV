var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 70, 30);
  bullet.shapeColor="white";
  wall=createSprite(1150,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation =0.5*weight*speed*speed/22600;
    if(deformation>100){
      bullet.shapeColor="white";
    }
    if(deformation<100 && deformation>100){
      bullet.shapeColor="white"
    }
    if (deformation<100){
      bullet.shapeColor="white";
    }
  }
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
     wall.shapeColor="green";
   }
  drawSprites();
}
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
   return false
  }