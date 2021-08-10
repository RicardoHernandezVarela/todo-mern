const express = require('express');
const todosController = require('../controller/todos');
const { createTodo, readTodos, updateTodo } = todosController;

const router = express.Router();

/************************************
 * ROUTES
 ***********************************/

// GET TODOS
router.get('/', readTodos);

// CREATE TODO
router.post('/', createTodo);

// UPDATE TODO
router.patch('/:id', updateTodo);

module.exports = router;