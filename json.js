const fs=require("fs");
 const teacher={
    name:"stuti",
    course:"INT222",
    subjects:["int222","int219","int108"]
 }
 console.log(teacher)
 const str=JSON.stringify(teacher)
 console.log(str)
 fs.writeFile("one.json",str,(err)=>
 {
    console.log("file written")
 })
 fs.readFile("one.json","utf-8",(err,data)=>
 {
    console.log(data)
 })