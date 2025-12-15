import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0)

  useEffect(()=>{
      // callOnce();
    CounterFunction();
  }, [counter])

  function CounterFunction(params) {
    console.log("counter function called", counter);
    
  }

  function callOnce(params) {
    console.log("callOnce fun called.");
    
  }


  return (
    <>
      <h1>useEffect hook</h1>
      <button onClick={()=>{setCounter(counter + 1)}}>counter {counter}</button>
      <button onClick={()=>{setData(data + 1)}}>data {data}</button>

    </>
  );
}

export default App;
