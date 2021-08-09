const express = require('express');
const todosController = require('../controller/todos');
const { createTodo, readTodos } = todosController;

const router = express.Router();

/************************************
 * ROUTES
 ***********************************/

// GET TODOS
router.get('/', readTodos);

// CREATE TODO
router.post('/', createTodo);

module.exports = router;