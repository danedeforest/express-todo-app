const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Fake DB variable to store todos in memory
const todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { title, completed } = req.body;
  const todo = { id: todos.length + 1, title, completed };
  todos.push(todo);
  res.status(201).json(todo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === int(parseInt(id, 10)));
  if (todoIndex ==-1) return res.status(404).send('Todo not found');
  const updatedTodo = { ...todos[todoIndex], ...req.body };
  todos[todoIndex] = updatedTodo;
  res.json(updatedTodo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === int(parseInt(id, 10)));
  if (todoIndex ==-1) return res.