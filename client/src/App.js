import React from 'react';
import Preloader from './components/Preloader';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';
import {readTodos, createTodo, updateTodo, deleteTodo } from './functions';
 
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  // GET todos data
  fetchData = async () => {
    const response = await readTodos();
    this.setState({
      data: response,
      loading: false,
      optionSelected: undefined
    });
  };

  // ADD new todo or EDIT one
  addOrEditTodo = async (todo, id, submitTrue, index) => {

    if (submitTrue) {
      // add todo
      const response = await createTodo(todo);
      this.setState({data: [...this.state.data, response]});

    } else {
      //edit todo
      const response = await updateTodo(id, todo);
      const dataCopy = this.state.data;
      dataCopy[index] = response;
      this.setState({data: [...dataCopy]});
    }
  };

  // Check option selected from the todos list and delete if icon clicked
  getOptionSelected = (option, item, index) => {
    if (option === 'edit') {
      this.setState({optionSelected: {option, item, index}});
    } else {
      // option === 'delete'
      this.removeTodo(item._id, index);
    }  
  };

  // DELETE todo
  removeTodo = async (id, index) => {
    const response = await deleteTodo(id);
    console.log(response);

    const dataCopy = this.state.data;
    dataCopy.splice(index, 1);
    this.setState({data: [...dataCopy]});
  };

  render() {
    const {loading, data, optionSelected} = this.state;

    return (
      <div className="center-align container">
        <TodoForm addOrEditTodo={this.addOrEditTodo} optionSelected={optionSelected} />

        {loading && (
          <Preloader />
        )}

        {!loading && (
          <TodosList items={data} getOptionSelected={this.getOptionSelected} />
        )}
      </div>
    );
  }
}

export default App;
