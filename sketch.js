const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var box1,box2;
var ground, ground_options;
function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;
  
  box1=new Box(400,200,50,50);
  box2=new Box(380,100,50,50);
  ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground)
  

}

function draw() {
  Engine.update(engine);
  background(0);  
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  box1.display();
  box2.display();
}