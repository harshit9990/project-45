var bg;
var bgImg;
var bow;
var bowImg;
 var alienImg;
 var alien;
 var arrowImg,arrow;
 var alienGroup;
 var arrowGroup;
  var b1;
var b1Img;
var b2;
var b2Img;
var b3;
var b3Img;
var b4;
var b4Img;

 
function preload(){
bgImg = loadImage("background.png")
bowImg = loadImage("shooter.png")

alienImg = loadImage("alien_03.png")

arrowImg = loadImage("arrow2.png")

b1Img = loadImage("virus_1.png")

b2Img = loadImage("virus_2.png")

b3Img = loadImage("virus_3.png")



}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2);
 
  bow = createSprite(300,450,40,50);
  bow.addImage(bowImg);
  bow.scale=0.7;
   
  
  
  alienGroup= new Group();
  arrowGroup= new Group();
}

function draw() {
  background(0);
  bg.addImage(bgImg);
  bg.scale=2;

  createArrow();
  
  if (keyDown("space")) {

     arrow.velocityX=7;
    
}


  textSize(80);
text("PRESS SPACE TO SHOOT THE VIRUSES AND ALIEN",500,300);
fill("black");




  if(keyDown("DOWN_ARROW")){
    bow.y=bow.y+7;
    }
    if(keyDown("UP_ARROW")){
        bow.y=bow.y-7;
    }
  if(alienGroup.isTouching(arrowGroup)){
    for(var i=0;i<alienGroup.length;i++){
        if(alienGroup[i].isTouching(arrowGroup)){
            alienGroup[i].destroy();
            arrowGroup.destroyEach();
        }
    }
    
    }  
  
   
 
 
 bacteria();

  drawSprites();
monster();


}
function monster(){
if(frameCount%100===0){
  alien=createSprite(random(600,width-100),random(100,height/2));
  alien.addImage(alienImg);
  alien.scale=0.16;
  alien.velocityX=-4;
alien.lifetime=300;
alienGroup.add(alien);
}
}
function createArrow(){
  arrow = createSprite(320,400,78,69);
  arrow.addImage(arrowImg);
  arrowGroup.add(arrow);
  arrow.scale=0.35;
   arrow.y=bow.y;
   //arrow.debug=true;
}

function bacteria(){
  if(frameCount%120===0){
    b1=createSprite(random(400,width-100),random(250,height/2));
b1.addImage(b1Img);
b1.scale=0.2;
b1.velocityX=-4;
alienGroup.add(b1);
}
if(frameCount%280===0){
  b2=createSprite(random(500,width-100),random(300,height/2));
  b2.addImage(b2Img);
  b2.scale=0.2;
  b2.velocityX=-4;
  alienGroup.add(b2);
}
if(frameCount%400===0){
  b3=createSprite(random(600,width-100),random(450,height/2));
  b3.addImage(b3Img);
  b3.scale=0.2;
  b3.velocityX=-4;
  alienGroup.add(b3);
}

}