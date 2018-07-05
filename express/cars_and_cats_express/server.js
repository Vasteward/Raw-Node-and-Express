var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);

app.use(express.static(__dirname + "/static"));

app.listen(8990, function() {
  console.log("listening on port 8990");
})
