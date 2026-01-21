import { useState } from "react";
import "./App.css";
import College from "./components/CollegeContext";
import { SubjectContext } from "./components/ContextData";



function App() {

  const [subject, setSubject] = useState("")

  return (
    <>
    <div style={{backgroundColor:'yellow', padding:'5px'}}>
        <SubjectContext.Provider value={subject}>
          <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
            <option value="">select subject</option>
            <option value="science">science</option>
            <option value="english">english</option>
            <option value="biology">biology</option>
            <option value="hindi">hindi</option>
          </select>
          <h1>context api</h1>
          <button onClick={()=>setSubject('')}>clear subject</button>
          <College />
        </SubjectContext.Provider>
    </div>
    </>
  )
}
export default App;