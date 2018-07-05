var express = require("express");
console.log("What express is:", express);

// instantiate express and store the result in a variable
var app=express();
console.log("app is:", app)

//tells our server to use the static folder
app.use(express.static(__dirname + "/static"));

//sets the location for the ejs 
app.set('views', __dirname + '/views');
//sets the the view engine to ejs
app.set('view engine', 'ejs');

//get cats.ejs

app.get('/sparkles', function(request, response){
    var kitties_array=[
        {photo: "images/cat1.png", name:"Sparkles", food: "souls", age: "3", rAndr: "by the flag pole"},
    ];
    response.render('details', {cats: kitties_array});
})
app.get('/trinidad', function(request, response){
    var kitties_array=[
        {photo: "/images/puma.jpg", name: "Trinidad", food: "turnip seeds", age: "7", rAndr: "in the sun on a lawn chair"},
    ];
    response.render('details', {cats: kitties_array});
})

app.get('/lizzy', function(request, response){
    var kitties_array=[
        {photo: "/images/panther.jpg", name:"Lizzy", food: "jinja", age: "6", rAndr: "next to the computer fan"},
    ];
    response.render('details', {cats: kitties_array});
})
app.get('/oscar', function(request, response){
    var kitties_array=[
        {photo: "/images/tiger.jpeg", name:"Oscar", food: "jinja", age: "6", rAndr: "next to the computer fan"},
    ];
    response.render('details', {cats: kitties_array});
})
///serve the same template, detail.js for each cat route when the cat is clicked
app.listen(5990, function(){
    console.log("Listening on port 5990")
})