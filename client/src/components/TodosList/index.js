import React from 'react';

function TodosList() {
    const items = [
        {name: 'Akvin 1'},
        {name: 'Akvin 2'},
        {name: 'Akvin 3'},
        {name: 'Akvin 4'}
    ];
    const [active, setActive] = React.useState(0);

    const onClick = (index) => {
        console.log('CLICKED !!', active);
        setActive(index);
    }

    return (
        <div className="collection">
            {items.map((item, index) => {
                return (
                    <a key={index} href="#!" 
                        className={`collection-item ${active === index ? 'active' : null}`} 
                        onClick={() => onClick(index)}>
                        {item.name}
                    </a>
                );
            })}
        </div>
    );
}

export default TodosList;
