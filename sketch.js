var image1,image2,image3,image4,image5,image6
var dice,rollButton,rollButton2,player,tiles,resolution,rows,columns,rand,random;
var turn = 1;
var gameState = 0
var tiles =[];
var colour1,colour2,p1,p2,pName1,pName2,submit,playerName1,playerName2,c1,c2,p1Score,p2Score;
var bg,bgImage
function setup() {
  createCanvas(800,600);
  submit = createButton("submit");
  pName1 = createElement('h1');
  pName2 = createElement('h1');
  /*colour1 = createInput("your color in double qoutes");
  colour2 = createInput("your color in double qoutes");*/
  pName1.html("PLAYER 1");
  pName2.html("PLAYER 2");
  p1 = createInput("write your name p1");
 p2= createInput("write your name p2");
  

  p1.position(width/2 -width/2.5,height/2-height/4);
  p2.position(width/2 +width/4,height/2-height/4);
  /*colour1.position(width/2 -width/2.5,height/2+height/4);
  colour2.position(width/2 +width/4,height/2+height/4);*/
  pName1.position(width/2 -width/2.5,25);
  pName2.position(width/2 +width/4,25);
  submit.position(width/2,550);

  submit.mousePressed(()=>{
    gameState = 1
    playerName1 = p1.value();
    playerName2 = p2.value();
    submit.hide();
    p1.hide();
    p2.hide();
    /*c1 = colour1.value();
    c2 = colour2.value();*/
    pName1.hide();
    pName2.hide();
    colour1.hide();
    colour2.hide();
   
  })

  //if(gameState === 2){
  width = 600;
  height = 600
  rollButton = createButton("Roll");
 
  
  player = new Player("red");
  player2 = new Player("blue");
  //player.color = c1;
  //player2.color = c2;
  dice = new Dice();
  //if()
 /* player2.snakeBitten();
player.snakeBitten();*/
  


player.start();
player2.start();

  
  resolution = 60;
 rows = width/resolution;
  columns = height/resolution;
 let x = 0;
 let y = (rows-1)*resolution;
 let dir = 1;
 
  for (var i = 0;i<columns*rows;i++ ){
   tile = new Tile(x,y,resolution,i,i+1);
   tiles.push(tile);
   x = x + (resolution*dir);
   if(x>=width||x<=-1*(resolution)){
    dir *= -1;
    x += resolution*dir;
     y -= resolution;
     
  }
   
   

 }
 


tiles[96].snakeorladder = -95;
tiles[95].snakeorladder = -46;
tiles[78].snakeorladder = -37;
tiles[14].snakeorladder = -6;
tiles[83].snakeorladder = -36;
tiles[57].snakeorladder = -25;
tiles[39].snakeorladder = -15;




  }

  

function preload(){
image1 = loadImage("images/1.png");
image2 = loadImage("images/2.png");
image3 = loadImage("images/3.png");
image4 = loadImage("images/4.png");
image5 = loadImage("images/5.png");
image6 = loadImage("images/6.png");
bgImage = loadImage("images/bg.jpg");
}

function draw() {
  background("indigo");
  console.log(playerName1+","+playerName2+","+gameState)
  if(gameState === 1||gameState ===2 ){
 player.Dice();
 player2.Dice();
  
  
 rollButton.position(682.5,350);

 
  console.log(mouseX,",",mouseY);
    //tiles[1].snakeorladder = -1;

     //tile.show(tiles);
     for (let tile of tiles){
     tile.show(tiles);
     
  }
 
 
  
  rollButton.mousePressed(()=>{
    // player.Dice(tiles);
    
     dice.show();
     
     
      /*if (gameState ===1 && player.spot  > 0&&player2.spot  > 0){
        gameState =2;
      }
       if(player.spot  == 0 &&dice.diceValue !== 6 ){
       
        turn = 2;
        
      }else if(player.spot  == 0 &&dice.diceValue == 6 ){
        player.spot =  player.spot +dice.diceValue;
        turn = 2;
        
       }else if(player2.spot  == 0 &&dice.diceValue !== 6 ){
       
        turn = 1;
      
      }else if(player2.spot  == 0 &&dice.diceValue == 6 ){
        player2.spot = player2.spot +dice.diceValue;
        turn = 1;*/
      
      if(turn === 1  ){
         turn = 2;
        if(player.playerStatus === 0){
          if(dice.diceValue ===6 ){
            player.playerStatus = 1;
          }
        }else{
          player.spot =  player.spot +dice.diceValue; 
        }
        
      }else if(turn === 2 ){
          turn = 1;
        if(player2.playerStatus === 0){
          if(dice.diceValue === 6){
          player2.playerStatus = 1;
          }
        }else{
          player2.spot =  player2.spot +dice.diceValue; 
        }
        
      }
    
     
     
   
   })
   
   player.show(tiles);
   player2.show(tiles)
   
   
  drawSprites();
  if(turn === 1){
    fill("cyan")
    text(playerName1+"'s turn",650,400);
  }else{
    fill("orange")
    text(playerName2+"'s turn",650,400);
  }
  if (player.spot === 99){
    //gameState = 3;
    rollButton.hide();
    dice.dice.destroy();
    p1Score = player.spot
    
  }else if(player2.spot === 99){
   // gameState = 3;
    rollButton.hide();
    dice.dice.destroy();
    p2Score = player2.spot
    
  }
  if( p1Score === 99){
    textSize(48);
    fill("yellow");
    text(playerName1+" WINS",width/4,height/2);
    } 
    if( p2Score === 99){
      fill("orange")
      textSize(48);
      text(playerName2+" WINS",width/4,height/2);
      
      } 
  
  push();
  stroke("green");
  strokeWeight(4)
line(150,575,275,450);
line(200,500,25,150)  ;
line(200,400,90,275);
line(390,334,500,90);
line(510,210,200,150);
line(325,275,570,30);
line(30,510,330,210);
pop();
  }
}
function color(){
   random= Math.round(random(1,6));
        
         
  switch(random){
    case 1: "red"
    break;
    case 2: "blue"
    break;
    case 3: "green"
    break;
    case 4:"yellow" 
    break;
    case 5:"purple" 
    break;
    case 6: "brown"
    break; 

}
}
