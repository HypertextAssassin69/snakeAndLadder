class Dice {
    constructor(){
        this.diceValue = 0;
        this.dice = createSprite(700, 300, 50, 50);
        this.dice.addImage(image1);
        this.dice.scale = 0.3;
    }
    show(){
        rand = Math.round(random(1,6));
        
         
        switch(rand){
          case 1: this.dice.addImage(image1);this.diceValue =1;
          break;
          case 2: this.dice.addImage(image2);this.diceValue=2;
          break;
          case 3: this.dice.addImage(image3);this.diceValue=3;
          break;
          case 4: this.dice.addImage(image4);this.diceValue=4;
          break;
          case 5: this.dice.addImage(image5);this.diceValue=5;
          break;
          case 6: this.dice.addImage(image6);this.diceValue=6;
          break;

        }
       
       
      }
    }
