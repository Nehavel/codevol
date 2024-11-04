import axios from 'axios';
import React, {useState, useEffect} from 'react'


function DataFetch() {
    const [id,setId] = useState(0);
    const [post, setPost] = useState(null)
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
            console.log(res)
            setPost(res?.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
       <>
       Data fetch
       <input placeholder='enter id' value={id} onChange={(e)=> setId(e.target.value)}></input> 
       <div>
        {post?.title}
       </div>
       </> 
    )
}

export default DataFetch
