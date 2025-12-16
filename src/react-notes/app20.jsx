// import "./App.css";
// import { useEffect, useState } from 'react';
// import SecondCounter from "./components/SecondCounter";

// function App() {

//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(0);

//   return (
//     <>
//       <SecondCounter count = {count} data = {data} />
//       <button onClick={()=>setCount(count + 1)}>counter : {count}</button>
//       <button onClick={()=>setData(data + 1)}>data : {data}</button>

//     </>
//   );
// }

// export default App;
// import { useEffect } from "react";

// function SecondCounter({count, data}) {

//     const handleCounter = () => {
//         console.log("handleCounter called");
        
//     }

//     const handleData = () =>{
//         console.log("handle Data called");
        
//     }

//     useEffect(()=>{
//         handleCounter();
//     }, [])

//     useEffect(()=>{
//         handleData();
//     }, [data])

// return(
// <>
//     <h1>counter value : {count}</h1>
//     <h1>data value : {data}</h1>
// </>
// )
// }
// export default SecondCounter;