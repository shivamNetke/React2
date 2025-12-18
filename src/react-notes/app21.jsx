// import "./App.css";
// import { useEffect, useState } from 'react';
// import ThirdCounter from "./components/ThirdCounter";

// function App() {

//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(0);
//   const [display, setDisplay] = useState(true)

//   return (
//     <>
//       <button onClick={()=>setCount(count + 1)}>Counter</button>
//       <button onClick={()=>setData(data + 1)}>Data</button>
//       <button onClick={()=>setDisplay(!display)}>toggle</button>
//     {
//       display ? <ThirdCounter count={count} data={data} /> : null
//     }
//     </>
//   );
// }

// export default App;
// import { useEffect } from "react";

// function ThirdCounter({count, data}) {
 
//     useEffect(()=> {
//         console.log("mounting phase only");
        
//     }, [])

//     useEffect(()=> {
//         console.log("update phase only");
        
//     }, [count])

//     useEffect(()=> {
//         console.log("unmount phase only");
        
//     }, [])

// return(
// <>
//     <div>
//       <h3>counter value : {count}</h3>
//       <h3>data value : {data}</h3>
//     </div>
// </>
// )
// }
// export default ThirdCounter;        