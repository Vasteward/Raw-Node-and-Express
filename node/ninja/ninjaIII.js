class Ninja{
    constructor(name){
        this.name=name;
        this.health=100;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(`My name is ${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health +=10
        // console.log(`Strength has increased, ${this.health}`)
    }
}

const ninja1 = new Ninja('Jeff')
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensai extends Ninja{
    constructor(name){
        //had to include the SUPER method in the constructor function and take in the same parameters as the parent to use in later functions
        super(name);
        this.name=name;
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        //pulled from the parent class using the SUPER method
        const drink = super.drinkSake();
        console.log(`Patience can cook a stone`)
    }
}

const superSensai= new Sensai('Master Splinter');
superSensai.speakWisdom();
superSensai.showStats();