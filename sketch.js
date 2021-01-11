//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//declaring the variables
var engine, world;
var box1,box2,box3,box4,box5;
var ground
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    //creating canvas
    var canvas = createCanvas(1200,400);
    //ceating engine for the ABG game from main Engine class
    engine = Engine.create();
    //world of the ABG is same as engine's world
    world = engine.world;

    //creating the objects
    box1 = new Box(730,350,50,50);
    pig1 = new Pig(800,350);
    box2 = new Box(870,350,50,50);
    log1 = new Log(800,310,200,PI/2);

    box3 = new Box(730,270,50,50);
    pig2 = new Pig(800,270);
    box4 = new Box(870,270,50,50);
    log2 = new Log(800,230,200,PI/2);

    box5 = new Box(800,190,50,50);
    log3 = new Log(760,175,150,PI/7);
    log4 = new Log(840,175,150,-PI/7);

    bird = new Bird(100,200);

    //degrees
    //radians
    //180 degree = PI

    ground = new Ground(600,380,1200,10);
}

function draw(){
    //clear the screen and give it clear
    background(0);

    //to update the engine
    Engine.update(engine);
   
    //to display objects
    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    
    log3.display();
    box5.display();
    log4.display();
    
    bird.display();
    ground.display();
}