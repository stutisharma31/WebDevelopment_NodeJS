const zlib =  require("zlib");

const fs = require("fs");

const http = require("http");

const server  = http.createServer((req,res)=>{

    const ws =  fs.createWriteStream("comp.txt");
    ws.write("This data will be compressed");

    const rs =  fs.createReadStream("comp.txt","utf-8");
    rs.on("data",(chunk)=>{
        console.log(chunk);
    })

    zlib.gzip("comp.txt",(err,cd)=>{
        console.log(cd);
        res.end(cd);
    })
})
