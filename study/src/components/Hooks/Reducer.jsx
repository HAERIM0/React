import React, { useReducer } from "react";

export default function Reducer() {
    const initiaState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case 'reset':
                return initiaState;
            case 'increment':
                return { count: state.count + 1, name: "sunrim" };
            case 'decrement':
                return { count: state.count - 1, name: "moonrim" };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initiaState);
    return (
        <div>
            Count(Reducer):{state.count}
            Name:{state.name}
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'docrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    )
}