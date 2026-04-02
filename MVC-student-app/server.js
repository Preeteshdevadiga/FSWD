const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require("./middlewares/errorhandler");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// Error handler
app.use(errorHandler);

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});