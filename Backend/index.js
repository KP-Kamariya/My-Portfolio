const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
 
const app = express();
const PORT = 5000;
 
// Middleware
app.use(bodyParser.json());
app.use(cors());
 
// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/todoapp').then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));
 
// Define Mongoose Schema & Model
const todoSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

 
const Todo = mongoose.model('Todo', todoSchema);
 
// Add a new task (POST)
app.post('/todos', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields required' });
    }

    const newTodo = new Todo({ name, email, message });
    await newTodo.save();

    res.status(201).json(newTodo);

  } catch (error) {
    res.status(500).json({ message: 'Error adding data', error });
  }
});

// Get all tasks (GET)
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
});
 
 
// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
 
