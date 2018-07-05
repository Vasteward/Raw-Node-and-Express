//node server
// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
var url= require('url')
// creating a server using http module:

var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            if(errors){
                console.log(errors);
                response.writeHead(404);
                response.end()
            } else {           
                response.writeHead(200, {'Content-type': 'text/html'});  // send data about response
                response.write(contents);  //  send response body
                response.end(); // finished!
            }
        }); 
    }
    else if(request.url === "/cars/new"){
        fs.readFile('views/newcar.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/cats"){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/honda.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/honda.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/tesla.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/tesla.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/rangeRover.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/rangeRover.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/puma.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/puma.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/panther.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/panther.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/tiger.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/tiger.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat1.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server to listen on a specific port
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
