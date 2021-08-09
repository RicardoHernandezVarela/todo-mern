import axios from 'axios';

const url = 'http://localhost:5000/todos';

// READ TODOS
const readTodos = () => {
    return axios.get(url);
};

// CREATE TODO
const createTodo = (todo) => {
    return axios.post(url, todo);
};

export { readTodos, createTodo }
