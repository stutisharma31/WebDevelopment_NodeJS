const fs=require("fs");
const http=require('http');
const server=http.createServer((req,res)=>{
    const ws=fs.createWriteStream("example.txt")
}).listen(5600,()=>
{
    console.log("server started")
});