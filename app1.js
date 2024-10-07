const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3200;

// Dummy hardcoded database for user credentials
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for authentication
const authenticateUser = (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Public route
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

// Login route
app.post('/login', authenticateUser, (req, res) => {
    res.redirect('/profile');
});

// Protected route
app.get('/profile', authenticateUser, (req, res) => {
    const { username } = req.user;
    res.send(`Welcome, ${username}! This is your profile page.`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
