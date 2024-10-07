const fs=require("fs");
var http=require("http");
fs.writeFile("one.json",str,(err)=>
 {
    console.log("file written")
 })
 fs.readFile("one.json","utf-8",(err,data)=>
 {
    console.log(data)
 })