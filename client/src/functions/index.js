import * as api from '../api';

// CREATE TODO
const createTodo = async (todo) => {
    try {
        const { data } = await api.createTodo(todo);
        return data;

    } catch (error) {
        return error;
    }
};

// READ TODOS
const readTodos = async () => {
    try {
        const { data } = await api.readTodos();
        return data;
        
    } catch (error) {
        return error;
    }
};

// READ TODOS
const updateTodo = async (id, updatedTodo) => {
    try {
        const { data } = await api.updateTodo(id, updatedTodo);
        return data;
        
    } catch (error) {
        return error;
    }
};

export { readTodos, createTodo, updateTodo };
