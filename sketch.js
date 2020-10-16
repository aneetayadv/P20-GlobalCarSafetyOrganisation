var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "blue";

  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x < car.width/2 + wall.width/2)
  {
    car.x = wall.x - ((car.width + wall.width)/2);
    car.velocityX = 0;
       
    var deformation = 0.5 * weight * speed * speed/ 22500;
    console.log(deformation);
    if(deformation > 180)
    {
      console.log("red");
      car.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100)
    {
      console.log("yellow");
      car.shapeColor = color(230,230,0);
    }
    if (deformation < 100)
    {
      console.log("green");
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
