const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// Store users in memory (for simplicity; use a database in production)
let users = [];

// POST endpoint to handle user registration
app.post('/api/register', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: 'User registered successfully', user });
});

// GET endpoint to retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Serve list.html
app.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'list.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
