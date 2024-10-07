const fs = require("fs");
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the homepage!');
    } else {
        const ws = fs.createWriteStream("stream.txt");
        ws.write("this is data entered through write");
        ws.end();

        const rs = fs.createReadStream("stream.txt", { encoding: 'utf-8', highWaterMark: 4 });
        rs.on("data", (chunk) => {
            console.log(chunk);
            res.write(chunk);
        });
        rs.on("end", () => {
            res.end();
        });
        rs.on("error", (err) => {
            console.error(err);
            res.statusCode = 500;
            res.end("Internal Server Error");
        });
    }
});

server.listen(6600, "localhost", () => {
    console.log("Server started at http://localhost:6600/");
});
