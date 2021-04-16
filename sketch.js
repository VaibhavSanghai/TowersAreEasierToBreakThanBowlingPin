const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var polygon, polygonImg;

function preload(){
    polygonImg = loadImage("polygon.png"); 
}

function setup() {
    var canvas = createCanvas(800, 700); 

    engine = Engine.create(); 
    world = engine.world; 

    //Ground and stand
    ground = new Ground(400, 700, 800, 20); 
    stand = new Ground(390, 250, 175, 30);

    //Level 3
    box8 = new Block(330, 235, 30, 40); 
    box9 = new Block(360, 235, 30,  40); 
    box10 = new Block(390, 235, 30, 40); 
    box11 = new Block(420, 235, 30, 40);     
    box12 = new Block(450, 235, 30, 40); 

    //Level 2
    box13 = new Block(360, 195, 30, 40); 
    box14 = new Block(390, 195, 30, 40); 
    box15 = new Block(420, 195, 30, 40); 

    //Level 1
    box16 = new Block(390, 155, 30, 40); 

    //Block holder with slings
    polygon = Bodies.circle(100, 200, 50, {'density': 1.0});
    World.add(world, polygon); 
    
    //Attaching slingshot
    slingShot = new SlingShot(this.polygon, {x: 100, y: 200}); 
}

function draw() {
    background("white"); 

    //Updating engine
    Engine.update(engine); 
    strokeWeight(4); 

    imageMode(CENTER); 
    image(polygonImg, polygon.position.x, polygon.position.y, 50, 50);

    //Displaying all objects
    ground.display(); 
    stand.display(); 

    box8.display(); 
    box9.display(); 
    box10.display(); 
    box11.display(); 
    box12.display(); 

    box13.display(); 
    box14.display(); 
    box15.display(); 

    box16.display(); 

    slingShot.display(); 

    drawSprites(); 
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    slingShot.fly(this.polygon); 
}