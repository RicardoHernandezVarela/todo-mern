import React from 'react';

function TodoForm({ addOrEditTodo, optionSelected }) {
    const INITIAL_TODO = {
        title: '',
        content: '',
    };

    const [todo, setTodo] = React.useState(INITIAL_TODO);
    const [submitButton, setSubmitButton] = React.useState(true);

    // ESC key pressed --> reset todo values and submit state
    React.useEffect(() => {
        const clear = (event) => {
            if (event.keyCode === 27) {
                setTodo(INITIAL_TODO);
                setSubmitButton(true);
            }
        }

        window.addEventListener('keydown', clear);

        return () => window.removeEventListener('keydown', clear);
    });

    // Change submit state and set item to edit
    React.useEffect(() => {
        if (optionSelected !== undefined && optionSelected.option === 'edit') {
            setTodo({
                title: optionSelected.item.title,
                content: optionSelected.item.content
            });

            setSubmitButton(false);
        }
    }, [optionSelected]);

    // Submit / Save changes button pressed
    const onSubmit = async (event) => {
        let id = '';
        let index = 0;

        if (optionSelected !== undefined) {
            id = optionSelected.item._id;
            index = optionSelected.index;
        }

        event.preventDefault();
        addOrEditTodo(todo, id, submitButton, index);
        setTodo(INITIAL_TODO);
        setSubmitButton(true);
        //console.log(optionSelected !== undefined ? id : 'mmm');
    };

    return (
        <div className="row">
            <form className="col s12" onSubmit={(event) => onSubmit(event)}>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">title</i>
                        <input id="icon_prefix" type="text" 
                                className="validate" 
                                onChange={(event) => setTodo({...todo, title: event.target.value})}
                                placeholder={'Title'}
                                value={todo.title} />
                        {/* <label htmlFor="icon_prefix">Title</label> */}
                    </div>

                    <div className="input-field col s6">
                        <i className="material-icons prefix">description</i>
                        <input id="icon_telephone" type="tel" 
                            className="validate"
                            onChange={(event) => setTodo({...todo, content: event.target.value})}
                            placeholder={'Content'}
                            value={todo.content} />
                        {/* <label htmlFor="icon_telephone">Content</label> */}
                    </div>
                </div>

                <div className="row right-align">
                    <button className="btn">
                        {submitButton === true ? "Submit" : "Save changes"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
