var backgroundImg, backgroundMusic, playerRunning, playerRunningU;

function preload(){
  backgroundImg = loadImage("sunset.png"); 
  backgroundMusic = loadSound("backgroundmusic.wav");
  playerRunning = loadAnimation("player1.png", "player2.png", "player3.png", "player4.png", "player5.png", "player6.png", "player7.png");
  playerRunningU = loadAnimation("player1u.png", "player2u.png", "player3u.png", "player4u.png", "player5u.png", "player6u.png", "player7u.png");
  platformImg = loadImage("platform.png");
  platformRImg = loadImage("platform2.png");
}

function setup(){
  createCanvas(6000, displayHeight); 
  
  player = createSprite(75, 565);

  player.addAnimation("running", playerRunning);
  player.addAnimation("upside_down", playerRunningU);
  player.scale = 0.6;

  platform1b = createSprite(80, 700, 180, 300);
  platform1b.addImage(platformImg);
  platform1b.scale = 0.65;

  platform2b = createSprite(240, 700, 180, 300);
  platform2b.addImage(platformImg);
  platform2b.scale = 0.65;

  platform3b = createSprite(400, 700, 180, 300);
  platform3b.addImage(platformImg);
  platform3b.scale = 0.65;

  platform4b = createSprite(560, 700, 180, 300);
  platform4b.addImage(platformImg);
  platform4b.scale = 0.65;

  platform5b = createSprite(720, 700, 180, 300);
  platform5b.addImage(platformImg);
  platform5b.scale = 0.65;

  platform6b = createSprite(880, 700, 180, 300);
  platform6b.addImage(platformImg);
  platform6b.scale = 0.65;

  platform7b = createSprite(1040, 700, 180, 300);
  platform7b.addImage(platformImg);
  platform7b.scale = 0.65;



  platform1t = createSprite(80, 500, 180, 300);
  platform1t.addImage(platformImg);
  platform1t.scale = 0.65;

  platform2t = createSprite(240, 500, 180, 300);
  platform2t.addImage(platformImg);
  platform2t.scale = 0.65;

  platform3t = createSprite(400, 500, 180, 300);
  platform3t.addImage(platformImg);
  platform3t.scale = 0.65;

  platform4t = createSprite(560, 500, 180, 300);
  platform4t.addImage(platformImg);
  platform4t.scale = 0.65;

  platform5t = createSprite(720, 432, 180, 300);
  platform5t.addImage(platformRImg);
  platform5t.scale = 1.3;

  platform6t = createSprite(880, 365, 180, 300);
  platform6t.addImage(platformRImg);
  platform6t.scale = 1.3;

  platform7t = createSprite(1040, 298, 180, 300);
  platform7t.addImage(platformRImg);
  platform7t.scale = 1.3;
  
  platform8t = createSprite(1200, 231, 180, 300);
  platform8t.addImage(platformRImg);
  platform8t.scale = 1.3;

  platform9t = createSprite(1360, 231, 180, 300);
  platform9t.addImage(platformRImg);
  platform9t.scale = 1.3;

  platform10t = createSprite(1520, 231, 180, 300);
  platform10t.addImage(platformRImg);
  platform10t.scale = 1.3;

  

  platform11b = createSprite(1480, 700, 180, 300);
  platform11b.addImage(platformRImg);
  platform11b.scale = 1.3;

  platform12b = createSprite(1640, 700, 180, 300);
  platform12b.addImage(platformRImg);
  platform12b.scale = 1.3;

  platform13b = createSprite(1800, 700, 180, 300);
  platform13b.addImage(platformRImg);
  platform13b.scale = 1.3;



  platform11t = createSprite(2000, 231, 180, 300);
  platform11t.addImage(platformRImg);
  platform11t.scale = 1.3;

  platform12t = createSprite(2160, 231, 180, 300);
  platform12t.addImage(platformRImg);
  platform12t.scale = 1.3;

  platform13t = createSprite(2320, 231, 180, 300);
  platform13t.addImage(platformRImg);
  platform13t.scale = 1.3;



  platform13b = createSprite(2450, 700, 180, 300);
  platform13b.addImage(platformImg);
  platform13b.scale = .65;

  platform14b = createSprite(2610, 700, 180, 300);
  platform14b.addImage(platformImg);
  platform14b.scale = .65;

  platform15b = createSprite(2770, 700, 180, 300);
  platform15b.addImage(platformImg);
  platform15b.scale = .65;

  platform16b = createSprite(2930, 700, 180, 300);
  platform16b.addImage(platformImg);
  platform16b.scale = .65;

  platform17b = createSprite(3090, 700, 180, 300);
  platform17b.addImage(platformImg);
  platform17b.scale = .65;

  platform18b = createSprite(3250, 632, 180, 300);
  platform18b.addImage(platformImg);
  platform18b.scale = .65;

  platform19b = createSprite(3410, 564, 180, 300);
  platform19b.addImage(platformImg);
  platform19b.scale = .65;

  platform20b = createSprite(3570, 496, 180, 300);
  platform20b.addImage(platformImg);
  platform20b.scale = .65;
  
  platform21b = createSprite(3730, 428, 180, 300);
  platform21b.addImage(platformRImg);
  platform21b.scale = 1.3;

  platform22b = createSprite(3890, 428, 180, 300);
  platform22b.addImage(platformRImg);
  platform22b.scale = 1.3;

  platform23b = createSprite(4050, 428, 180, 300);
  platform23b.addImage(platformRImg);
  platform23b.scale = 1.3;

  platform24b = createSprite(4210, 428, 180, 300);
  platform24b.addImage(platformRImg);
  platform24b.scale = 1.3;

  platform25b = createSprite(4530, 428, 180, 300);
  platform25b.addImage(platformImg);
  platform25b.scale = .65;

  platform26b = createSprite(4690, 428, 180, 300);
  platform26b.addImage(platformImg);
  platform26b.scale = .65;

  platform27b = createSprite(5200, 428, 180, 300);
  platform27b.addImage(platformRImg);
  platform27b.scale = 1.3;

  platform28b = createSprite(5360, 428, 180, 300);
  platform28b.addImage(platformRImg);
  platform28b.scale = 1.3;
  
  platform29b = createSprite(5520, 428, 180, 300);
  platform29b.addImage(platformRImg);
  platform29b.scale = 1.3;



  platform14t = createSprite(3090, 231, 180, 300);
  platform14t.addImage(platformImg);
  platform14t.scale = .65;

  platform15t = createSprite(3250, 231, 180, 300);
  platform15t.addImage(platformImg);
  platform15t.scale = .65;

  platform16t = createSprite(3410, 231, 180, 300);
  platform16t.addImage(platformImg);
  platform16t.scale = .65;

  platform17t = createSprite(3570, 231, 180, 300);
  platform17t.addImage(platformImg);
  platform17t.scale = .65;

  platform18t = createSprite(3730, 231, 180, 300);
  platform18t.addImage(platformImg);
  platform18t.scale = .65;

  platform19t = createSprite(4220, 231, 180, 300);
  platform19t.addImage(platformImg);
  platform19t.scale = .65;

  platform20t = createSprite(4380, 231, 180, 300);
  platform20t.addImage(platformImg);
  platform20t.scale = .65;
  

  platform21t = createSprite(4900, 231, 180, 300);
  platform21t.addImage(platformImg);
  platform21t.scale = .65;

  platform22t = createSprite(5060, 231, 180, 300);
  platform22t.addImage(platformImg);
  platform22t.scale = .65;

  platform23t = createSprite(5220, 231, 180, 300);
  platform23t.addImage(platformImg);
  platform23t.scale = .65;

  platform24t = createSprite(5600, 231, 180, 300);
  platform24t.addImage(platformImg);
  platform24t.scale = .65;

  platform25t = createSprite(5760, 231, 180, 300);
  platform25t.addImage(platformImg);
  platform25t.scale = .65;

  platform26t = createSprite(5920, 231, 180, 300);
  platform26t.addImage(platformImg);
  platform26t.scale = .65;
}

function draw(){
  background(backgroundImg);

  //backgroundMusic.playMode("sustain");
  //backgroundMusic.loop();

  player.velocityX = 7;
  //player.velocityY = 0;

  //camera.position.x = player.x + 2000;
  camera.position.y = displayHeight/2;

  if (player.isTouching(platform1t) || player.isTouching(platform2t) || player.isTouching(platform3t) || player.isTouching(platform4t) || player.isTouching(platform5t) || player.isTouching(platform6t) || player.isTouching(platform7t) || player.isTouching(platform8t)|| player.isTouching(platform9t)|| player.isTouching(platform10t)|| player.isTouching(platform11t)|| player.isTouching(platform12t)|| 
  player.isTouching(platform13t)|| player.isTouching(platform14t)|| player.isTouching(platform15t)|| player.isTouching(platform16t)|| player.isTouching(platform17t)|| player.isTouching(platform18t)|| player.isTouching(platform19t)|| player.isTouching(platform20t)|| player.isTouching(platform21t)|| player.isTouching(platform22t)|| player.isTouching(platform23t)|| player.isTouching(platform24t)|| player.isTouching(platform25t)|| player.isTouching(platform26t)||player.isTouching(platform1b)|| player.isTouching(platform2b)|| player.isTouching(platform3b)|| player.isTouching(platform4b)|| player.isTouching(platform5b)|| player.isTouching(platform6b)|| player.isTouching(platform7b)|| player.isTouching(platform11b)|| player.isTouching(platform12b)|| player.isTouching(platform13b)|| player.isTouching(platform14b)|| player.isTouching(platform15b)|| player.isTouching(platform16b)|| player.isTouching(platform17b)|| player.isTouching(platform18b)|| player.isTouching(platform19b)|| player.isTouching(platform20b)|| player.isTouching(platform21b)|| player.isTouching(platform22b)|| player.isTouching(platform23b)|| player.isTouching(platform24b)|| player.isTouching(platform25b)|| player.isTouching(platform26b)){
    player.velocityY = 0;
  }

  if(keyDown("up")) {
    player.y = player.y - 10;
    player.velocityY = -5;
    
    player.changeAnimation("upside_down", playerRunningU); 
  }

  if(keyDown("down")) {
    player.y = player.y + 10;
    player.velocityY = 2;
    
    player.changeAnimation("running", playerRunning); 
  }

  drawSprites();
}