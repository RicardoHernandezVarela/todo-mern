const mongoose = require('mongoose');
const Todo = require('../models/todos');

// CREATE TODO
const createTodo = async (req, res) => {
    const todo = new Todo(req.body);

    try {
        await todo.save();
        res.status(201).json(todo);

    } catch (error) {
        res.status(409).json({error: error.message});
    }
};

// READ TODOS - GET TODOS
const readTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);

    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = { createTodo, readTodos };