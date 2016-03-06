var fs = require('fs');
var path = require('path');
fs.writeFileSync("first-test.txt", "Text to be written into the file");

var readBack = fs.readFileSync("first-test.txt").toString();

//readfilesync is kind of like a scanner.

console.log(readBack);

require('./User2');


require('./User1');

var websiteHome = "Desktop/Charles/youmad/index.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

/* will print something every 2 seconds
setInterval(function () {
	console.log("hello");
},2000);
 */

console.log(__dirname); //directory name
console.log(__filename); //entire full file name
