const express = require("express");

const app = express();
app.use(express.json());

// Sample Task Data
let tasks = [
  { id: 1, title: "Learn Node", completed: false },
  { id: 2, title: "Build API", completed: true }
];


// 📌 GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// 📌 GET single task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  res.json(task || { message: "Task not found" });
});

// 📌 CREATE task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.json(newTask);
});

// 📌 UPDATE task
app.put("/tasks/:id", (req, res) => {
  tasks = tasks.map(t =>
    t.id == req.params.id ? { ...t, ...req.body } : t
  );
  res.json({ message: "Task updated" });
});

// 📌 DELETE task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});


// 🚀 Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
