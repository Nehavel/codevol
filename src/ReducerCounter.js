import React, {useReducer} from 'react'

function ReducerCounter() {
    const initialState = 0;
    const reducer = (state,action) => {
        switch(action){
            case 'inc':
                return state + 1;
            case 'dec':
                return state - 1;
            case 'reset':
                return initialState;
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <>
        <div>
            Count - {count} <br/>
            Count Two - {countTwo}
        </div>
        <div>
            <button onClick={() => dispatch('inc')}>INC 1</button>
            <button onClick={() => dispatch('dec')}>DEC 1</button>
            <button onClick={() => dispatchTwo('inc')}>INC 2</button>
            <button onClick={() => dispatchTwo('dec')}>DEC 2</button>
        </div>
        </>
        
    )
}

export default ReducerCounter
