class Tile{
    constructor(x,y,wh,index,next){
        this.x = x;
        this.y=y;
        this.wh=wh;
        this.index = index;
        this.next=next;
        this.snakeorladder =0;

        if(this.index%2 === 0){
          this.colour = 200
        }else{
            this.colour = 100
        }

    }
    getCentre(){
       let cx = this.x +this.wh/2; 
       let cy = this.y +this.wh/2; 
       return[cx,cy];

    }
    show(tiles){
       
        push();
        fill(this.colour);
        rect(this.x,this.y,this.wh,this.wh);
        textSize(24);
        fill("blue")
        text(this.next,this.x,this.y+ this.wh);
        if (this.snakeorladder!==0){
         let myCentre = this.getCentre();
         let nextCentre = tiles[this.index+this.snakeorladder].getCentre();
         
         strokeWeight(4);
         if (this.snakeorladder<0){
            stroke("red");
            line (myCentre[0],myCentre[1],nextCentre[0],nextCentre[1])
         }else{
             stroke("lightgreen")
         }
         
         
        }
        pop();
        //fill(red)
       
    }
}