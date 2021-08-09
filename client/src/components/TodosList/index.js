import React from 'react';

function TodosList({items}) {

    const [active, setActive] = React.useState(0);

    const onClick = (index) => {
        setActive(index);
    }

    return (
        <div className="collection">
            {items.map((item, index) => {
                return (
                    <a key={index} href="#!" 
                        className={`collection-item ${active === index ? 'active' : null}`} 
                        onClick={() => onClick(index)}>
                        {item.title}
                    </a>
                );
            })}
        </div>
    );
}

export default TodosList;
