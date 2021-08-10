import axios from 'axios';

const url = 'http://localhost:5000/todos';

// CREATE TODO
const createTodo = (todo) => {
    return axios.post(url, todo);
};

// READ TODOS
const readTodos = () => {
    return axios.get(url);
};

// CREATE TODO
const updateTodo = (id, updatedTodo) => {
    return axios.patch(`${url}/${id}`, updatedTodo);
};

export { readTodos, createTodo, updateTodo }
