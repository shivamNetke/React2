import "./App.css";
import { useEffect, useState } from 'react';
import ThirdCounter from "./components/ThirdCounter";

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true)

  return (
    <>
      <button onClick={()=>setCount(count + 1)}>Counter</button>
      <button onClick={()=>setData(data + 1)}>Data</button>
      <button onClick={()=>setDisplay(!display)}>toggle</button>
    {
      display ? <ThirdCounter count={count} data={data} /> : null
    }
    </>
  );
}

export default App;
