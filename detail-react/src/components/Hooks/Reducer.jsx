import React, { useReducer } from 'react'
// import { useState } from 'react';

export default function State() {
    const initiaState = { count: 0, name: 'sunrim' };

    function reducer(state, action) {
        switch (action.type) {
            case 'react':
                return initiaState;
            case 'increment':
                return { count: state.count + 1, name: 'moonrim' };
            case 'docrement':
                return { count: state.count - 1, name: 'sunsunrim' };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initiaState);
    return (
        <div>
            Count(Reducer):{state.count}
            Name:{state.name}
            <button onClick={() => dispatch({ type: 'react' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment' })}>-</button>
            <button onClick={() => dispatch({ type: 'doctement' })}>+</button>
        </div>
    )
}
