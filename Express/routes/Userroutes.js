// routes/userroutes.js

const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.send('Home Page');
});

// About route
router.get('/about', (req, res) => {
    res.send('About Page');
});

// Contact route
router.get('/contact', (req, res) => {
    res.send('Contact Page');
});

module.exports = router;