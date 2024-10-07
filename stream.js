const fs=require("fs");
const http=require('http');
const server=http.createServer((req,res)=>{
    const ws=fs.createWriteStream("stream.txt");
    ws.write("this is data entered through write")
    const rs=fs.createReadStream("stream.txt",{encoding:'utf-8',highWaterMark:4});
    rs.on("data",(chunk)=>
    {
        console.log(chunk);
        res.end(chunk);
    })
    rs.on("error",(err)=>
    {
        console.log(err)
    })
}).listen(6000,()=>
{
    console.log("server started")
});
