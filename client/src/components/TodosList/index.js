import React from 'react';

function TodosList({items, getOptionSelected, error}) {

    const [active, setActive] = React.useState({index: 0});

    // On option selected
    const optionSelected = (event, item, index) => {
        event.preventDefault();
        getOptionSelected(event.target.textContent, item, index);
    };

    if (items.length > 0 && !error) {
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
        
    } else if (items.length > 0 || error) {
        return (
            <ul className="collection">
                <li className="collection-item">
                    <h5>{!error ? "There are no items yet!" : "There was an error fetching data"}</h5>
                    <p>{!error ? "Add one to the list" : `${error}`}</p>
                </li>
            </ul>
        );
    }
}

export default TodosList;
