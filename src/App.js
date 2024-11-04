
import './App.css';
import BasicsHolder from './basicsHolder';
import Tabs from './Tabs';
import { useState } from 'react';
import DataFetch from './DataFetch';
import ReducerCounter from './ReducerCounter';
import ReducerDataFetch from './ReducerDataFetch';
function App() {
  // selected Tab
  const [selected, setSelected] = useState(1);
  // switches content based on the selected tab
  let content =  () => {
  switch(String(selected)){
  case '0':
    return (<BasicsHolder></BasicsHolder>)
  case '1':
    return (<>
    <DataFetch></DataFetch>
    </>)
  case '2':
    return (<>
      <ReducerCounter></ReducerCounter>
      <ReducerDataFetch></ReducerDataFetch>
      </>)

  default:
    return (<>no tabs selected</>)
}
  }
    
  
  return (
    <>
    <Tabs selected={selected} setSelected = {setSelected}></Tabs>
   
    <div>
      {content()}
    </div>
   
    
    
    </>
  );
}

export default App;
