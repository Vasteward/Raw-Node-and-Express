// requiring the module my_module, we were able to import the object we set equal to module.exports in the my_module.js file
// module.exports = {
//     greet: function(){
//         console.log("we are now using a module!");
//     },
//     add: function(num1, num2){
//         console.log("the sum is:", num1 + num2);
//     }
// }


module.exports = function(){
    return {
        greet: function(){
            console.log("we are now using a module!");
        },
        add: function(num1, num2){
            console.log("the sum is:", num1 + num2);
        }
    }
}


// querystring - this module provides utilities for dealing with query strings (part of the URL that contains the data to be passed) - http://nodejs.org/api/querystring.html
// url - this module has utilities for URL resolution and parsing, such as getting the current URL of your page etc - http://nodejs.org/api/url.html
// redis - allows you to use a Redis server: https://github.com/mranney/node_redis
// underscore - popular utility library: https://npmjs.org/package/underscore
// coffeescript - Coffeescript compiler: http://coffeescript.org/
// node-validator - is a library of string validation, filtering and sanitation methods. Visit https://github.com/chriso/node-validator/blob/master/README.md
// express - a nice framework to help you organize your code even further (we'll study this in the next chapter)
// See other node modules you could use: https://npmjs.org/