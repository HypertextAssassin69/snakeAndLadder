var current,centre,rand;
class Player{
    constructor(color){
    this.start();
    this.color =color;
    this.playerStatus = 0
        //this.random = random;
    }
    Dice(){
        if (this.spot === 96){
            this.spot = 1;
        }
        if (this.spot === 95){
            this.spot = 49;
        }
        if (this.spot === 78){
            this.spot = 41;
        }
        if (this.spot === 14){
            this.spot = 8;
        }
        if (this.spot === 83){
            this.spot = 47;
        }
        if (this.spot === 57){
            this.spot = 32;
        }
        if (this.spot === 39){
            this.spot = 24;
        }
      
      
      
      
        //ladder |
        //       v
        
        
        if (this.spot === 2){
            this.spot = 24;
        }
        if (this.spot === 16){
            this.spot = 79;
        }
        if (this.spot === 36){
            this.spot = 58;
        }
        if (this.spot === 46){
            this.spot = 88;
        }
        if (this.spot === 68){
            this.spot = 76;
        }
        if (this.spot === 54){
            this.spot = 90;
        }
        if (this.spot === 19){
            this.spot =65;
        }
        if (this.spot>= tiles.length){
            this.spot = this.spot - rand;
           
        }
        if (tile === true){
            this.spot += tile.snakeorladder;
        }
      }
   
    show(tiles){
         let current = tiles[this.spot];
        fill(this.color);
        let centre = current.getCentre();
        ellipse(centre[0],centre[1],32);
    }
    
    start(){
        this.spot = 0;
        
    }

}
 