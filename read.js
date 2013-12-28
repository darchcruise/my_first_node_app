var fs = require("fs");
console.log("Staring");
fs.readFile("test.txt", function(error, data) {
	console.log("Contents: " + data);
});
console.log("Finshed");