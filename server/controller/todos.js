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

// UPDATE TODO
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }

    const todo = {title, content, _id: id};

    try {
        await Todo.findByIdAndUpdate(id, todo, {new: true});
        res.json(todo);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createTodo, readTodos, updateTodo };