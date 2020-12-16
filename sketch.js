const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
var engine, world;


var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    
    
    ball1 = new Ball(200,140,100,100);
    rope1 = new Rope(ball1.body,{x:200,y:50});
    ball2 = new Ball(300,140,100,100);
    rope2 = new Rope(ball2.body,{x:300,y:50});
    ball3 = new Ball(400,140,100,100);
    rope3 = new Rope(ball3.body,{x:400,y:50});
    ball4 = new Ball(500,140,100,100);
    rope4 = new Rope(ball4.body,{x:500,y:50});
    ball5 = new Ball(600,140,100,100);
    rope5 = new Rope(ball5.body,{x:600,y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    stroke("white");
    fill("black");
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY});
 
}
