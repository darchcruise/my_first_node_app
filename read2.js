var fs = require("fs");
console.log("Staring");
var content = fs.readFileSync("test.txt");
console.log("Contents: " + content);
console.log("Finshed");