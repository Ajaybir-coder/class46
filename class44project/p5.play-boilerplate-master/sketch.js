var bgImage, bg1;
var logoImg, logo;
var gameState = 0;
var b1;
var boyI, ScorpI, snakeI, mummyI, lionI, diamondI, jinI, trackI;
var boy;

function preload(){
  bgImage = loadImage("ps/bg1.jpg");
  logoImg = loadImage("ps/logo.jpg");
  boyI = loadImage("ps/boy.png")
  ScorpI = loadImage("ps/scorpion.png");
  mummyI = loadImage("ps/mummy.png");
  snakeI = loadImage("ps/snake.png");
  lionI = loadImage("ps/egypt.png");
  diamondI = loadImage("ps/diamond.png");
  jinI = loadImage("ps/jin.png");
  trackI = loadImage("ps/path2.jpg");
}
function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);

 // bg1 = createSprite(displayWidth/2, displayHeight/2 );
 // bg1.addImage("story",bgImage);
}

function draw() {
 // background(255);
  if(gameState === 0){
    background(bgImage)
    //displayWidth/2,displayHeight/
    logo = createSprite(displayWidth/2,displayHeight/5.5);
    logo.addImage(logoImg);
    logo.scale = 0.15;
    
    textStyle(BOLDITALIC)
    textSize(30);
    fill("black");
    text("Hey! WELCOME to the Cave Adventures!",displayWidth/2-300,displayHeight/2-90);
    text("There are many rumours in the village about Gold Treasure in the Cave Of Tharsis",displayWidth/2-600,displayHeight/2-50);
    text("A boy went there to find it!",displayWidth/2-300+10,displayHeight/2-10);
    text("Now, you are going to help that boy...",displayWidth/2-300,displayHeight/2+30);
    fill("red");
    text("CAUTION: Don't touch any of obstacle or you have to start again!!!",displayWidth/2-550,displayHeight/2+70);
    
   
    b1 = createSprite(displayWidth/2,displayHeight/2+110,80,40);
    b1.shapeColor = "black";
    
    
    if(mousePressedOver(b1)){
      gameState = 1;
    }
  }
    if(gameState === 1){
      logo.visible = false;
      b1.visible = false;
      bg1 = createSprite(displayWidth/4,displayHeight/4);
      bg1.addImage(trackI)
      bg1.velocityX = -2;

      if(bg1.x<0){
        bg1.x = bg1.width/2;
      }
      
      boy = createSprite(-displayWidth*2,displayHeight/2+200);
      boy.addImage(boyI);
      boy.scale = 0.65;
      
    }
  
    
  drawSprites();
  
 if(gameState === 0){
    textSize(15);
    fill("white");
    text("START",displayWidth/2-20,displayHeight/2+110);
 }
  
}