import React from 'react';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = React.useState({
        title: '',
        content: ''
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        addTodo(todo);
    };

    return (
        <div className="row">
            <form className="col s12" onSubmit={(event) => onSubmit(event)}>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">title</i>
                        <input id="icon_prefix" type="text" 
                                className="validate" 
                                onChange={(event) => setTodo({...todo, title: event.target.value})} />
                        <label htmlFor="icon_prefix">Title</label>
                    </div>

                    <div className="input-field col s6">
                        <i className="material-icons prefix">description</i>
                        <input id="icon_telephone" type="tel" 
                            className="validate"
                            onChange={(event) => setTodo({...todo, content: event.target.value})} />
                        <label htmlFor="icon_telephone">Content</label>
                    </div>
                </div>

                <div className="row right-align">
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
