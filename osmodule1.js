const os=require("os")
const path=require("path")
const eventEmitter=require("events")
//os module
console.log(os.arch())
const mem=os.freemem()
console.log(mem)
const kb=mem/1024
console.log(kb)
const mb=kb/1024
console.log(mb)
const gb=mb/1024
console.log(gb)
const total=mb+kb+gb
console.log(total)
console.log(os.hostname())
console.log(os.uptime())
console.log(os.type())
console.log(os.version())
console.log(os.userInfo())
console.log(os.constants)
console.log(os.tmpdir())
console.log(os.constants.signals)
console.log(os.constants.priority)
console.log(os.constants.errno)
console.log(os.cpus())
//path module
console.log(path.dirname("D:\fsd\INT252\osmodule1.js"))
console.log(path.basename("D:\fsd\INT252\osmodule1.js"))
console.log(path.extname("D:\fsd\INT252\osmodule1.js"))
console.log(path.parse("D:\fsd\INT252\osmodule1.js"))
console.log("D:\fsd\INT252\osmodule1.js".charAt(0))
console.log("D:\fsd\INT252\osmodule1.js".concat)
console.log(path.delimiter)
const pjoin=path.join('ab','abc','osmodule1.js')
console.log(pjoin)
//event module
//event
const event=new eventEmitter
event.on("start",()=>{
      console.log(`event is triggrered`)
})
event.emit("start")
//event1
const event1 = new eventEmitter();
event1.on("starts", number => {
  console.log(`started ${number}`);
});
event1.emit("starts", 23);
//event2
const event2 = new eventEmitter();
event2.on('save',() => {
  console.log(`A save event occured`);
});
event2.emit('save');
//multiple arguments
const event3 = new eventEmitter();
event3.on('start',(start,end) => {
  console.log(`started from ${start} to ${end}`);
});
event3.emit('start',1,100);
// //write "hello" every 500 milliseconds
// var myInt=setInterval(function(){
//   console.log("Hello");
// },500);
//http module
const http=require("http");
const server=http.createServer((req,res)=>{
  res.write("hello");
  res.end("hello i am response");
  res.write("hello");
});
server.listen(1000,()=>{
  console.log("listening to port number 1000")
});



