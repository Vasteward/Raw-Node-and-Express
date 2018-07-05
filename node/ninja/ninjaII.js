//OBJECT CONSTRUCTOR___________
function Ninja(name){
    var self = this;
    var speed="3";
    var strength="3";
    var privateMethod = function(){
        console.log("private method for speed and strength approximately:" + speed + " & " + strength)
    }
    //ATTRIBUTES_______________
    this.name=name;
    this.health=100;
    this.punched=5;
    this.overall = this.health - this.punched
    //METHODS___________________
    this.ouch = function(){
        console.log("Ouch! Goemon, you now have " + this.overall + " Health!")
    }
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!" );
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        privateMethod();
        // console.log(self);
    }
    
}


// _________________________________________//

// PROTOTYPE METHOD_______________(PUNCHED)_________________s
Ninja.prototype.punch=function(opponent){
    this.opponent=opponent;
    var punched = "5"
    console.log(this.name + " was punched by " + this.opponent.name + " and lost " + punched + " Health!")
    console.log(this.opponent)
}

// INSTANCES of OBJECT CLASSES_________________
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");


// METHODS________________________
blueNinja.punch(redNinja);
blueNinja.ouch();

// PROTOTYPE METHOD_______________(KICKED)_________________s
Ninja.prototype.kick=function(opponent){
    var self = this;
    this.opponent = opponent;
    var kick = "15";
    console.log(this.opponent.name + " was kicked by " + this.name + " and lost " + kick + " Health!");
    console.log("In this case, redNinja " + this.opponent.name + " lost " + kick + " because blueNinja " + this.name + " has 1 point of strength ")
    //Checking the instructors validity of an instance
    console.log(blueNinja instanceof Ninja, redNinja instanceof Ninja);
    
}

// INSTANCES of OBJECT CLASSES_________________
blueNinja.kick(redNinja);
