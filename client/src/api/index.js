import axios from 'axios';

const url = 'https://todosmern-app.herokuapp.com/todos'; //'http://localhost:5000/todos';

// CREATE TODO
const createTodo = (todo) => {
    return axios.post(url, todo);
};

// READ TODOS
const readTodos = () => {
    return axios.get(url);
};

// UPDATE TODO
const updateTodo = (id, updatedTodo) => {
    return axios.patch(`${url}/${id}`, updatedTodo);
};

// UPDATE TODO
const deleteTodo = (id) => {
    return axios.delete(`${url}/${id}`);
};

export { readTodos, createTodo, updateTodo, deleteTodo }
