// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";


1. // GIVEN
// console.log(hello);                                   
// var hello = 'world';    
// AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello);
hello="world";
// --returns world


2. // GIVEN
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// AFTER HOISTING BY THE INTERPRETER
var needle;
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
needle = 'haystack';
// logs magnet
// returns haystack

3.//GIVEN
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
var brendan;
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
brendan = 'super cool';
//logs undefined
//returns super cool


4.//GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
var food;
console.log(food);
eat();
function eat(){
  var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
}
food = 'chicken';
//logs undefined
//returns half-chicken

5.//GIVEN
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// AFTER HOISTING BY THE INTERPRETER
var mean = function() {
	var food;
  food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);
mean();
console.log(food);
//food is not defined, it is declared int eh function of the scope

6.//GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
var genre;
console.log(genre);
genre = "disco";
rewind();
function rewind() {
  var genre;
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre);
//logs undefined, rock, r&b, disco
//returns undefined

7.//GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
dojo = "san jose";
function learn() {
	var dojo;
  dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);
//logged san jose, seattle, burbank, san jose
//returned undefined

8.//GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// returns a syntax error because the browser is trying to parse the variabe inside of an if statment and it can only be accessed in the function scope at the level it was declared 