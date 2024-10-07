const fs=require("fs");
var fs = require("fs"); 


console.log("Synchronous read method:"); 
var data = fs.readFileSync('sample.txt'); 
console.log("Data in the file is - " + data.toString()); 
