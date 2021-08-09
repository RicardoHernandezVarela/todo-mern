const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String
}, {timestamps: true});

const Todo = new model('Todo', todoSchema);

module.exports = Todo;