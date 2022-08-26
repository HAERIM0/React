import React from 'react'

export default function List() {
    // const number = [1, 2, 3, 4, 5];
    // return (
    //     <div>
    //         {number.map((item) => (
    //             <li>{item.toString()}</li>
    //         ))}
    //     </div>
    // )
    const todos = [
        { id: 1, text: 'Drink Water' },
        { id: 2, text: 'Drink orange' },
        { id: 3, text: 'Drink milk' },
        { id: 4, text: 'Drink red' },
    ];

    const Item = (props) => {
        return <li>{props.id}{props.text}</li>;
    }

    const todoList = todos.map((todo) => <Item key={todo.id}{...todo} text={todo.text} />);

    return <>{todoList}</>;
}
