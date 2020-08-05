class Feedback{
    constructor(){
        this.feedback = createInput('Your Feedback here',text); 
        this.submit = createButton('Submit');

        this.experience = createRadio();
        this.experience.option('Excellent 😊');
        this.experience.option('Good 😀');
        this.experience.option('Average 😑');

        this.useful = createRadio();
        this.useful.option('Yes');
        this.useful.option('Maybe');
        this.useful.option('No');

    }

    display(){
        this.feedback.size(300,100);
        this.feedback.position(35,200);
        
        fill("Black");
        textSize(20);
        text("Your Experience :",35,30);
        this.experience.position(35,50);

        text("Is this App useful?",100,120);
        this.useful.position(35,148);

        this.submit.position(40,600);
        this.submit.size(300,50);
        var userFeedback = this.feedback.value();
        if (userFeedback.length >= 38){
          //some function which will change the line that IDK 
        }

        var exp = this.useful.value();
        var use = this.experience.value();
        userFB.push(userFeedback,exp,use);
    
        this.submit.mousePressed(()=>{
            
            this.feedback.position(1000,1000);
            this.submit.position(1000,1000);
            this.experience.position(1000,1000);
            this.useful.position(1000,1000);
            gameState = 6_2;

        });

    }
}