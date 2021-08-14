var shooter, shooterImg;
var rock1, rockGroup;
var gameOver;
var red, redGroup;
var earth;
var no;


function preload() {
  earth = loadImage("bg.png.jpg");
  shooterImg = loadImage("shooter.png.png");
  rock1 = loadImage("arock.png.png");
  rock2 = loadImage("rock.png.png");
  rock3 = loadImage("therock.png.png");
  }
function setup(){
  createCanvas(displayWidth-50,displayHeight-150);
  rockGroup = new Group();
  redGroup = new Group();
  shooter = createSprite(displayWidth/2, displayHeight-300);
  shooter.addImage(shooterImg);
  shooter.scale = 0.3;
  shooter.setCollider("circle",0,0,200);
  shooter.debug = true;

  
}

function draw() {
  background(earth);


  no = createSprite(1000,1000-80,100000,10);
  no.shapeColor = "red";

  if (keyDown("LEFT_ARROW")){
    shooter.x -= 10;
  }
  if (keyDown("RIGHT_ARROW")){
    shooter.x += 10;
  }

  if (keyDown("space")){
    bullet();
  }


  
 if(rockGroup.isTouching(no)){
  textSize(100);
  fill("red");
  textSize("GameOver! You lost",200,200);
  rockGroup.destroy();
  shooter.destroy();
}


m
 if (rockGroup.isTouching(redGroup)){
    for(var i=0;i<rockGroup.length;i++){     
      if(rockGroup[i].isTouching(redGroup)){
    rockGroup[i].destroy();
  }
}
 }



  createRock();
  drawSprites();
}

function bullet(){
  red = createSprite(200,200,5, 20);
  red.shapeColor = "red";
  red.x = shooter.x;
  red.y = shooter.y;
  red.velocityY = -10;
  red.lifetime = 200;
  redGroup.add(red);
  return red;
}




function createRock(){
  if(frameCount%60===0){
    rock = createSprite(200,-10);
    rock.addImage(rock1);
    rock.x = Math.round(random(0,displayWidth-50));
    rockGroup.add(rock);
    rock.lifetime = 800;
    rock.velocityY = 4;
    rock.scale = 0.1;
  }
  
  
}



