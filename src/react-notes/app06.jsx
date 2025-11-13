import './App.css';
import { useState } from "react"

function App() {

  const [count, setCount]=useState(1);

  return (
    <>
      <h1>shivam netke</h1>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Counter</button>
      {
        count==0?<h1>count is 0</h1>
        :count==1?<h1>count is 1</h1>
        :count==2?<h2>count is 2</h2>
        :count==3?<h2>count is 3</h2>
        :null
      }
    </>
  );
}

export default App;
