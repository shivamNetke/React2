import { useState } from "react";
import "./App.css";



function App() {

  const [data, setData] = useState(
    ['shivam', 'ashita', 'tulsi', 'shraddha']
  )

  const handleUser = (name)=>{
    data[data.length-1] = name;
    console.log(data);
    setData([...data])
  }

  const handleUserAge = (age) =>{
    dataDetails[dataDetails.length-1].age = age;
    setDataDetails([...dataDetails])
  }
  const [dataDetails, setDataDetails] = useState([
    {name:'shivam', age:22},
    {name:'ashita', age:21},
    {name:'tulsi', age:20},

  ])

  return (
    <>
      <h2>updating array in state</h2>
      <input type="text" placeholder="change last user" 
      onChange={(event)=>handleUser(event.target.value)} />
      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }

      <hr />

      <input type="text" placeholder="change last user age"
      onChange={(event)=>handleUserAge(event.target.value)} />
      {
        dataDetails.map((item, index)=>(
          <h4 key={index}>{item.name} {item.age}</h4>
        ))
      }
    </>
  )
}

export default App;