const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3300;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/save-user-info", (req, res) => {
   const { name, email } = req.query;
    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }
    const user = { name, email };

    const userData = JSON.stringify(user);

    fs.writeFile("user_info.json", userData, (err) => {
        if (err) {
            console.error("Error saving user information:", err);
            return res.status(500).send("Internal Server Error");
        }
        console.log("User information saved successfully");  
        res.send("User information saved successfully");
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// GET /save-user-info?name=John&email=john@example.com
