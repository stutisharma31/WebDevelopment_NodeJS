const Buffer=require("buffer").Buffer;
const buf1=Buffer.alloc(10);
const buf2=Buffer.alloc(10,1);
const buf3=Buffer.allocUnsafe(10);
buf3.fill(0)
console.log(buf3)
const buffer1=Buffer.from('Hello','utf-8');
const buffer2=Buffer.from('World','utf-8');
const concatenatedBuffer=Buffer.concat([buffer1,buffer2]);
console.log(concatenatedBuffer.toString('utf-8'));

buffer.write('Hello','utf-8');
const data=buffer.toString('utf-8');
console.log(data);