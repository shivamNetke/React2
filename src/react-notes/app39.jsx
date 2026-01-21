/*
  import { useState } from "react";
  
  const useToggle = (defaultValue) => {
      const [value , setValue] = useState(defaultValue)
      function toggleValue(val) {
          if (typeof val !='boolean') {
               setValue(!value)
          }else
          {
              setValue(val)
          }
      }
      return [value, toggleValue]
  };
  export default useToggle;
  import "./App.css";
import useToggle from "./custom hooks/useToggle";



function App() {

  const [value, toggleValue]= useToggle(true)
  const [data, toggleData]= useToggle(true)

  return (
    <>
    <button onClick={toggleValue}>toggle heading</button>
    <button onClick={()=> toggleValue(false)}>hide heading</button>
    <button onClick={()=> toggleValue(true)}>show heading</button>
{
  value?<h1>custom hooks</h1>:null
}
<hr />
<button onClick={toggleData}>toggle heading</button>
    <button onClick={()=> toggleData(false)}>hide heading</button>
    <button onClick={()=> toggleData(true)}>show heading</button>
{
  data?<h1>second hook</h1>:null
}    </>
  )
}
export default App;



*/