var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
   speed = random(55,90);
   weight = random(400,1500);

  car =createSprite(500, 200, 50, 50);
  
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.ShapeColor = "black";

}

function draw() {
  background(0,0,0); 
  if(wall.x-car.x<car.width/2+wall.width/2){

  
  car.velocityX= 0;
  
  Deformation = 0.5*weight*speed*speed/22500;
  if (Deformation<100) {
    car.ShapeColor = "green";
  }

 if (Deformation>100<180 ) {
    car.ShapeColor = "red";
  }
  if (Deformation>180) {
    car.ShapeColor = "blue";
  }
}
  drawSprites();
}