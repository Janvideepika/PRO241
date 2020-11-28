const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,paper,ground,world;

function preload()
{
		
}

function setup() {
	createCanvas(1250, 650);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(1200, 510, 20, 200);
	dustbin2 = new Dustbin(1000, 510, 20, 200);
	dustbin3 = new Dustbin(1100, 600, 200, 20);


	paper = new Paper(200, 450, 70);
	ground =new Ground (625,height,1250,50);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(230);
   
	
	paper.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  }


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-255})
	}
}












 

