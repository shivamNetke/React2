import { useState } from "react";
import "./App.css";

function App() {

  const [data, setData] = useState({
    name:'shivam netke',
    address:{
        city:'nagar',
        pcode: 414601
    }
  })

  const handleName =(value) =>{
    data.name = value 
    setData({...data})
  }

  const handleCity = (city) =>{
    data.address.city = city;
    setData({...data, address:{...data.address,city}})
  }

  const handlePcode = (pcode) =>{
    data.address.pcode = pcode;
    setData({...data,address:{...data.address,pcode}})
  }

  return (
    <>
      <h1>updating object in state</h1>
      
      <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)}/>
      <input type="text" placeholder="update city" onChange={(event)=>handleCity(event.target.value)}/>
      <input type="text" placeholder="update pcode" onChange={(event)=>handlePcode(event.target.value)}/>


      <h2>name : {data.name}</h2>
      <h2>city : {data.address.city}</h2>
      <h2>pcode : {data.address.pcode}</h2>
    </>
  )
}

export default App;