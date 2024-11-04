import React, {useState} from 'react'

function Counter() {
 const [count, setCount] = useState(0);
    return (
       <>
       Counter
       {count}
       <button onClick={() => setCount(prevVal => prevVal + 1)}>
        Increase Count
       </button>
       </> 
    )
}

export default Counter
