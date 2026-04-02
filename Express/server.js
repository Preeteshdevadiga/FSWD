// const express = require('express');
// const app = express();
// const port = 5000;

// // Home
// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

// // About
// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// // Contact
// app.get('/contact', (req, res) => {
//     res.send('Contact Page');
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// server.js

const express = require('express');
const app = express();
const port = 3000;

// routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});