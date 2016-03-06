// Express version of running a local web server
//var express = require('express');
//var app = express();
//app.get('/', function (req, res) {
//	res.send(200, 'Hello World');
//});
//app.listen(6969);



var http = require('http');

function onRequest(request,response) {
//create object "request" which will contain information about the user request, and response which will
//contain information about the user response.
	console.log("A user made a request" + request.url);
	response.writeHead(200, { "Content-Type": "text/plain" });
	// send back a response with the header 200 status code (everything ok), and then the content is
	// an object so you need to have the attributes and the values for each attribute in colon form.
	response.write("Here is some data");
	// after writeHead we use response.write to send the body of the response.
	response.end();
	// when you run you are effectively sending a request?
}

http.createServer(onRequest).listen(6969);
console.log("Server is now running....");

//created the server and has a message to show that it created and is listening on local host:6969

