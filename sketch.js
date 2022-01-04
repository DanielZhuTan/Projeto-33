const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var rock;
var slingshot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,400,width,20);

  box = new Box(625,355,200,70);

  block1 = new Block(555,310,20,30);
  block2 = new Block(580,310,20,30);
  block3 = new Block(605,310,20,30);
  block4 = new Block(630,310,20,30);
  block5 = new Block(655,310,20,30);
  block6 = new Block(680,310,20,30);
  block7 = new Block(705,310,20,30);

  block8 = new Block(580,275,20,30);
  block9 = new Block(605,275,20,30);
  block10 = new Block(630,275,20,30);
  block11 = new Block(655,275,20,30);
  block12 = new Block(680,275,20,30);

  block13 = new Block(605,245,20,30);
  block14 = new Block(630,245,20,30);
  block15 = new Block(655,245,20,30);

  block16 = new Block(630,215,20,30);

  rock = new Rock(200,200,30,30);

  slingshot = new Slingshot(rock.body,{x:200,y:200});

}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  ground.display();

  box.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  rock.display();

  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
