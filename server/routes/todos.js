const express = require('express');
const todosController = require('../controller/todos');
const { createTodo, readTodos, updateTodo, deleteTodo } = todosController;

const router = express.Router();

/************************************
 * TODOS ROUTES
 ***********************************/

// GET TODOS
router.get('/', readTodos);

// CREATE TODO
router.post('/', createTodo);

// UPDATE TODO
router.patch('/:id', updateTodo);

// DELETE TODO
router.delete('/:id', deleteTodo);

module.exports = router;