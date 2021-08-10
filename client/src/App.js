import React from 'react';
import Preloader from './components/Preloader';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';
import {readTodos, createTodo, updateTodo} from './functions';
 
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

  fetchData = async () => {
    const response = await readTodos();
    this.setState({
      data: response,
      loading: false,
      optionSelected: undefined
    });
  };

  addOrEditTodo = async (todo, id, submitTrue, index) => {

    if (submitTrue) {
      const response = await createTodo(todo);
      this.setState({data: [...this.state.data, response]});

    } else {
      const response = await updateTodo(id, todo);
      const dataCopy = this.state.data;
      dataCopy[index] = response;
      this.setState({data: [...dataCopy]});
    }
  };

  getOptionSelected = (option, item, index) => {
    this.setState({optionSelected: {option, item, index}});
    //console.log({option, item});
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
