import React from 'react';

function TodosList({items, getOptionSelected}) {

    const [active, setActive] = React.useState({index: 0});

    // On option selected
    const optionSelected = (event, item, index) => {
        event.preventDefault();
        getOptionSelected(event.target.textContent, item, index);
    };

    return (
        <ul className="collection">
            {items.map((item, index) => {
                return (
                    <li className={`collection-item ${active.index === index ? 'active' : null}`} 
                        key={item._id}
                        onClick={() => setActive({...item, index})}>
                        <div className="left-align">
                            <h6>{item.title}</h6>
                            <p>
                                {item.content}
                                <a href="/" className="secondary-content" onClick={(event) => optionSelected(event, item, index)}>
                                    <i className="material-icons">edit</i>
                                </a>
                                <a href="/" className="secondary-content" onClick={(event) => optionSelected(event, item, index)}>
                                    <i className="material-icons">delete</i>
                                </a>
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodosList;