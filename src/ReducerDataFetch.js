import React, {useReducer, useState, useEffect} from 'react'
import axios from 'axios'
function ReducerDataFetch() {
    const initialState = {
        loading: true,
        error: null,
        post: null
    }
    const reducer = (state, action) => {
        switch(action?.type){
            case 'FETCH_SUCCESS':
                return (
                    {
                        loading: false,
                        post: action?.payload,
                        error: null   
                    }
                );
                case 'FETCH_FAILURE':
                    return (
                        {
                            loading: false,
                            post: null,
                            error: 'Error in fetching data'   
                        }
                    );
                default:
                    return state;
    
        }
    
    }
    const [data, dispatch]= useReducer(reducer,initialState);
    const [id,setId] = useState(0);
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
            console.log(res)
            dispatch({type: 'FETCH_SUCCESS', payload: res?.data})
        })
        .catch(err =>  dispatch({type: 'FETCH_FAILURE', payload: null}))
    }, [id])
    return (
        <>
       <input placeholder='enter id' value={id} onChange={(e)=> setId(e.target.value)}></input> 
       <div>
        {String(data.loading)}
        {data?.post?.title}
       </div>
        </>
    )
}

export default ReducerDataFetch
