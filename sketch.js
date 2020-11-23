
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;



function setup() {
	createCanvas(3000, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
	m1 = new Mango(1300,300,30);
	m2 = new Mango(1400,250,30);
	m3 = new Mango(1300,200,30);
	m4 = new Mango(1390,300,30);
	m5 = new Mango(1300,300,30);
	m6 = new Mango(1200,300,30);
  m7 = new Mango(1500,280,30);
  tree = new Tree(1300,680);
  ground = new Ground(0,680,4000,20);
	boy = new Boy(250,600);
	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background("white")
  fill('green');
  textSize(24);
  text("press space to get another chance", 200,200);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  chain.display();

  Collision(stone, m1);
  Collision(stone, m2);
  Collision(stone, m3);
  Collision(stone, m4);
  Collision(stone, m5);
  Collision(stone, m6);
  Collision(stone, m7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function Collision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
