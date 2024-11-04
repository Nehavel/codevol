import React, {useState, useEffect} from 'react'

function Effectsexample() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('neha');
    useEffect(()=>
    {
        console.log('Im called everytime there is a change as I dont have condition');
    })
    useEffect(()=>{
        console.log('changed name')
    }, [name])
    useEffect(()=>{
        console.log('hits only for the 1st time');
        return() =>{
            console.log('component is nomore valid');
            //this is used like component unmount, when component no longer exists this is hit to destroy 
            //or reset to initial state
        }
    }, [])
    return (<>
    <button onClick={()=> setCount(count + 1)}>Click {count}</button>
    <div>
        <input value={name} onChange={(event)=> setName(event.target.value)}></input>
    </div>
    </>
        
    )
}

export default Effectsexample
