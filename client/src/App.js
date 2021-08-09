import React from 'react';
import Preloader from './components/Preloader';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }
  render() {
    const {loading} = this.state;

    return (
      <div className="center-align container">
        <TodoForm />

        {loading && (
          <Preloader />
        )}

        {!loading && (
          <TodosList />
        )}
      </div>
    );
  }
}

export default App;
