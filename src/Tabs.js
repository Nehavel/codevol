import React from 'react';

function Tabs(props) {
    
    const tabs = ['Basics', 'Data Fetch', 'Reducer', 'Others'];
   
    return (
        <div className='tab'>
        <ul>
            {
                tabs.map((tabname,index) => {
                    let style =(props.selected === index) ? 'selected' : '';
                    console.log(style)
                    return(
                        <li  key={index}
                         className={style} onClick={() => props.setSelected(index)}>
                        <h3>
                            {tabname}
                        </h3>
                        
                        </li>
                    )
                })
            }
        </ul>
        </div>
        
    )
}

export default Tabs
