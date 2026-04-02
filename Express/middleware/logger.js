// middleware/logger.js

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // move to next step
};

module.exports = logger;