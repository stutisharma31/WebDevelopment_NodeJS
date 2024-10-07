//Create a file
const fs=require("fs")
fs.writeFile("fs.txt","Original data",(err)=>{
    console.log("file is created");
    console.log(err);
})
//Add data to file
fs.appendFile("fs.txt",":Hello I am added",(err)=>{
    console.log("task completed");
})