var http=require("http");
var PORT=2000;
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.end(`Welcome to index page`);
    }
    else if(req.url=="/emp"){
        res.end(`Welcome to Employees page`);
    }
    else
    {
        res.end("invalid request of the user");
    }
});
server.listen(PORT,function(){
console.log(`Server is running at port ${PORT}`)});