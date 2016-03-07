// Express version of running a local web server
//var express = require('express');
//var app = express();
//app.get('/', function (req, res) {
//	res.send(200, 'Hello World');
//});
//app.listen(6969);


//var express = require('express');
var http = require('http');
var fs = require('fs');

// build a 404 response message for "Page Cannot be Found"

function sendpageNotFound(response){
	response.writeHead(404, { "Content-Type": "text/html" });
	fs.createReadStream("./Icons/404.html").pipe(response); 
	//response.end(); edited out to allow the 404.html page to persist.
}


function onRequest(request, response) {
	//inspect request to see if homepage exists:
	if (request.method == 'GET' && request.url == '/') {
		//sending back html document (text/html not text/plain)
		response.writeHead(200, { "Content-Type": "text/html" });
		fs.createReadStream("./Icons/index.html").pipe(response);
		console.log("a user made a successful request to: " + request.url); //pipe the stream to the response object.
	}
	else {
		sendpageNotFound(response);
		console.log("unsuccessful GET request, redirected to 404 page");
	}
//create object "request" which will contain information about the user request, and response which will
//contain information about the user response.
	
//	response.writehead(200, { "content-type": "text/plain" });
//	 send back a response with the header 200 status code (everything ok), and then the content is
//	 an object so you need to have the attributes and the values for each attribute in colon form.
//	response.write("here is some data");
//	 after writehead we use response.write to send the body of the response.

//	 when you run you are effectively sending a request?
}

http.createServer(onRequest).listen(6969);
console.log("Server is now running....");

//created the server and has a message to show that it created and is listening on local host:6969

