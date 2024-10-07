const zlib = require("zlib");
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
    const rs = fs.createReadStream("comp.txt.gz");
    rs.on("error", (err) => {
        console.error("Error reading compressed file:", err);
        
        res.end("Internal Server Error");
    });
    const buffers = [];
    rs.on("data", (chunk) => {
        buffers.push(chunk);
    });
    rs.on("end", () => {
        const compressedData = Buffer.concat(buffers);
        zlib.gunzip(compressedData, (err, decompressedData) => {
            if (err) {
                console.error("Error decompressing data:", err);
               
                res.end("Internal Server Error");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end(decompressedData);
            }
        });
    });
}).listen(6300, () => {
    console.log("Server started at port 6300");
});
