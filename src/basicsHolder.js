
import Counter from './components/basic/Counter';
import ArrayObj from './components/basic/ArrayObj';
import Effectsexample from './components/basic/Effectsexample';
import React from 'react'

function BasicsHolder() {
    return (
        <>
        <div>
      <Counter></Counter>
    </div>
    <ArrayObj></ArrayObj>
    <div>
      <h3>effects example</h3>
      <Effectsexample></Effectsexample>
    </div>
        </>
        
    )
}

export default BasicsHolder
