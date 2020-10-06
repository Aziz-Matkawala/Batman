const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bruce, bruceAnimation, raindrops

function preload(){
    bruceAnimation = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png")
}

function setup(){
    var canvas = createCanvas(200, 600); 
    engine = Engine.create();
    world = engine.world;
    bruce = createSprite(100, 500, 100, 100);
  bruce.addAnimation("animation", bruceAnimation);
  bruce.scale = 0.25
    
}

function draw(){
  background("black");
  
  spawnDrops();
  drawSprites()
}   

function spawnDrops(){
    if(frameCount%5 === 0){
        raindrops = new rainDrop(random(0, 200), 0);
        if(raindrops.body.position.y>600){
            raindrops.body.position.y = 0
        }
        raindrops.display()
    }
}