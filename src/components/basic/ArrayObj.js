import React, { useState } from 'react'

function ArrayObj() {
  const  [arr, setArr] = useState([]);
  const [name, setName] = useState({firstName: '', lastName:''});
 const increment = () => {
    setArr([...arr, Math.floor(Math.random()*10)])
  }
    return (
        <>
        Array
        <div>
            {arr.map(
                value => 
                {
               return <div key={value}>{value}</div>
            }
                )}
        </div>
        <div>
            <button onClick={increment}>Increment</button>
        </div>
        <div>
            Object
            <input value={name?.firstName} onChange={e => setName({...name, firstName: e.target.value})}></input>
       
       <div>
       fff {name.firstName} llll
        {name.lastName}
        </div>     
           </div>
        </>
    )
}

export default ArrayObj
