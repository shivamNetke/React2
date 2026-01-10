// first method 
// import { useState } from 'react';
// import './App.css';
// function App() {

//   const [pending, setPending] = useState(false);

//   const handleSubmit = async () => {
//     setPending(true)
//     await new Promise(res => setTimeout(res, 2000))
//     setPending(false)

//   }
//   return (
//     <>
//       <h2>useTransition Hook </h2>
//       <button disabled={pending} onClick={handleSubmit}>submit</button>
//     </>
//   );
// }

// export default App;

// second method 

import { useTransition } from 'react';
import './App.css';
function App() {

  const [pending, startTransition] = useTransition();

  const handleSubmit = async () => {

    startTransition(async()=>{
      
      await new Promise(res => setTimeout(res, 2000))

    })

  }
  return (
    <>
      <h2>useTransition Hook </h2>
      {
        pending?
        <img style={{width:"100px"}} src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="" />
        :null
      }
      <button disabled={pending} onClick={handleSubmit}>submit</button>
    </>
  );
}

export default App;
