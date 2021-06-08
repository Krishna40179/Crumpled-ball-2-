
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,box1,box2,box3

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,700,1200,20);
	ball=new Ball(100,50,40);
	box1=new Box2(900,680,200,20);
	box2=new Box(800,610,20,150);
	box3=new Box(1000,610,20,150);
}


function draw() {
 
  background(255);
  Engine.update(engine);
  textSize(25);
  fill("black");
  text("press up arrow to put the ball in dustbin",20,50)
ground.display();


box2.display();
box3.display();
box1.display();
ball.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode==UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}


