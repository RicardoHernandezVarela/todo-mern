import React from 'react';
import Preloader from './components/Preloader';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';
import {readTodos, createTodo} from './functions';
 
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
      loading: false
    });
  };

  addTodo = async (todo) => {
    const response = await createTodo(todo);
    //console.log(response);
    this.setState({data: [...this.state.data, response]});
  };

  render() {
    const {loading, data} = this.state;

    return (
      <div className="center-align container">
        <TodoForm addTodo={this.addTodo} />

        {loading && (
          <Preloader />
        )}

        {!loading && (
          <TodosList items={data} />
        )}
      </div>
    );
  }
}

export default App;
