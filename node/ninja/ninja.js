function Ninja(name){
    var self = this;
    var speed="3";
    var strength="3";
    var privateMethod = function(){
        // console.log("private method for speed and strength " + speed + " " + strength)
    }
    this.name=name;
    this.health=100;
    this.sayName = function(){
        console.log("My ninja name is " + this.name +"!" );
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
        privateMethod();
        // console.log(self);
    }
    
}
var hyabusa = new Ninja("Hyabusa")
var hayabusa = new Ninja("Hayabusa")
hyabusa.sayName();
hayabusa.showStats();