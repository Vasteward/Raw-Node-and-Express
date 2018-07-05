var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);

app.use(express.static(__dirname + "/static"));

// look in the views folder
app.set('views', __dirname + '/views');

//set the view engine to ejs
app.set('view engine', 'ejs');

//get the cats file
app.get('/cats', function(request, response){
  response.render('cats')
})
//get the cars file
app.get('/cars', function(request, response){
  response.render('cars')
})
//get the form file
app.get('/cars/new', function(request, response){
  response.render('newcar')
})

app.listen(6990, function() {
  console.log("listening on port 6990");
})
