var bg,issImg,iss,spaceCraft,scImg,scImg1,scImg2,scImg3;
var hasDocked=false;




function preload(){
  bg=loadImage("spacebg.jpg")
  scImg=loadImage("spacecraft1.png")
  scImg1=loadImage("spacecraft2.png")
  scImg2=loadImage("spacecraft3.png")
  scImg3=loadImage("spacecraft4.png")
  issImg=loadImage("iss.png")
}





function setup() {
  createCanvas(600,400);
  spaceCraft=createSprite(258,240);
  spaceCraft.addImage(scImg)
  spaceCraft.scale=0.15;
  iss=createSprite(330,130);
  iss.addImage(issImg)
  iss.scale=0.25;
}

function draw() {
  background(bg); 
  spaceCraft.addImage(scImg) 
  if(!hasDocked){
spaceCraft.x=spaceCraft.x+random(-1,1)
if(keyDown("UP_ARROW")){
spaceCraft.y=spaceCraft.y-2
}
if(keyDown("LEFT_ARROW")){
  spaceCraft.addImage(scImg3)
  spaceCraft.x=spaceCraft.x-1
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(scImg2)
    spaceCraft.x=spaceCraft.x+1
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(scImg1)
      }
  }
  if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10))
  { hasDocked = true;
     textSize(25);
     fill("white") 
     text("Docking Successful!", 200, 300); }
  drawSprites();
}