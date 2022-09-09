import React from 'react'

export default function List() {
    // const numbers = [1, 2, 3, 4, 5];
    // return (
    //     <ul>
    //         {numbers.map((item) => (
    //             <li key={item.toString()}>{item}</li>
    //         ))}
    //     </ul>
    // )

    const todos = [
        { id: 1, text: "Drink water" },
        { id: 2, text: "Drink hotwater" },
        { id: 3, text: "Drink coolwater" },
        { id: 4, text: "Drink orangewater" },
    ];

    const Item = (props) => {
        return (
            <li>
                {props.id}
                {props.text}
            </li>
        );
    }

    const todoList = todos.map((todo) => (
        <Item key={todo.id} id={todo.id} text={todo.text} />
    ));


    return <>{todoList}</>;
}
