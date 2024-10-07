const{error}=require("console");
try{
    const fs=require("fs");
    console.log(data)
    const new1=data.toString()
    console.log(data)
}
catch{
    console.log(error)
}
function printErr(){
    if(err){
        console.log(err)
    }
    else{
        console.log("correct")
    }
}
printErr();