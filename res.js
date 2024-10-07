var express = require("express");
var app = express();

app.get('/home', function(req, res) {
    res.send({
        id: 1,
        name: "stuti"
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});


// build a simple express.js server that accepts get requests containing query parameters representing user information.your server should extract these query parameters, save them to a File, and respond with a success Message