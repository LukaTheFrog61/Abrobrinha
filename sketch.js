var mapa, chao1;
var personagemP, pPIdle, pPRun, pPJump;
var flor, florImg,coletadoImg;
function preload() {
  mapa = loadImage("map1.png");
  pPIdle = loadAnimation("/PrincipalOC/idle.gif");
  pPJump = loadAnimation("/PrincipalOC/jump.gif");
  pPRun = loadAnimation("/PrincipalOC/run.gif");
  coletadoImg = loadImage("/ju-main/plant1.png");
  florImg = loadImage("/ju-main/plant2.png");
}

function setup() {
  createCanvas(1000, 600);
  chao1 = createSprite(230, 300, 260, 10);
  chao1.visible = false;
  flor = createSprite(490,605, 10,10);
  flor.addImage("1", florImg);
  flor.addImage("2", coletadoImg);
  flor.scale = 0.3 ;
  personagemP = createSprite(230, 100, 10, 10);
  personagemP.addAnimation("idle", pPIdle);
  personagemP.addAnimation("jump", pPJump);
  personagemP.addAnimation("run", pPRun);
  personagemP.scale = 0.25;
  personagemP.debug = true;
 
}

function draw() {
  background("white");
  image(mapa, 0, 0, 1920, 1080);
  text(personagemP.x + "," + personagemP.y , mouseX, mouseY);
  movimento();
  drawSprites();
}
function movimento() {
  //personagemP.velocityY += 0.5
  personagemP.collide(chao1);
  if ((keyIsDown("RIGHT_ARROW") || keyIsDown(68))&&personagemP.x<1850) {
    personagemP.x += 5;
    personagemP.changeAnimation("run");
    personagemP.mirrorX(+1);
  } else if ((keyIsDown("LEFT_ARROW") || keyIsDown(65))&&personagemP.x>70) {
    personagemP.x -= 5;
    personagemP.changeAnimation("run");
    personagemP.mirrorX(-1);
  } else if (keyIsDown("UP_ARROW") || keyIsDown(87)) {
    //personagemP.velocityY = -10;
    personagemP.y -= 5;
    personagemP.changeAnimation("jump");
    } else if (keyIsDown("DOWN_ARROW") || keyIsDown(83)){
    personagemP.y += 5;
    personagemP.changeAnimation("jump");
  } else {
    personagemP.changeAnimation("idle");
  }

  if (personagemP.x < 500) {
    camera.x = 500;
  } else if (personagemP.x > 1420) {
    camera.x = 1420;
  } else {
    camera.x = personagemP.x;
  }
  if (personagemP.y < 300) {
    camera.y = 300;
  } else if (personagemP.y > 780) {
    camera.y = 780;
  } else {
    camera.y = personagemP.y;
  }
}
