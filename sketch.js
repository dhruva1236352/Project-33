const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var snow1Img;
var snow2Img,snow3Img,snow4Img;
var boy
var snowboy
var snow

var snow=[];

var engine;
var world;

function preload()
{
snow1Img=loadImage("snow1.jpg")
boy=loadImage("snow boy.png")
}

function setup() {
  createCanvas(800,400);

  engine= Engine.create()
  world= engine.world
   
snowboy=createSprite(400,300,20,20);
snowboy.addImage(boy)
snowboy.scale=0.5

}

function draw() {
  background(snow1Img);  
  Engine.update(engine)
  drawSprites();

  if(frameCount%50===0)
  {
    snow.push(new Snow(random(50,750),random(20,100),50,50))
  }

  for(var i=0; i < snow.length; i++)
  {
    snow[i].display()
  }
  
}