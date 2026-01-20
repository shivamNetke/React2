// import { useId } from "react";
// import "./App.css";



// function App() {

//   return (
//     <>

//       <UserForm />
//       <hr />
//       <UserForm />


//     </>
//   );
// }


// function UserForm() {
  
//   const name = useId()
//   const pass = useId()
//   const skills = useId()
//   const terms = useId()
  
  
//   return (
//     <>

//       <form action="" method="post">
//         <label htmlFor={name}>enter name : </label> 
//         <input id={name} type="text" placeholder="enter name" />  <br /><br />

//          <label htmlFor={pass}>enter pass : </label> 
//         <input id={pass} type="text" placeholder="enter pass" />  <br /><br />

//          <label htmlFor={skills}>enter skills : </label> 
//         <input id={skills} type="text" placeholder="enter skills" />  <br /><br />

//         <input id={terms} type="checkbox" placeholder="" />
//         <label htmlFor={terms}>terms and condition</label>



//       </form>
//       </>
//       )
// }
//     export default App;

import { useId } from "react";
import "./App.css";



function App() {

  return (
    <>

      <UserForm />
      <hr />
      <UserForm />


    </>
  );
}


function UserForm() {
  
  const user = useId()
  
  return (
    <>
      <form action="" method="post">
        <label htmlFor={user + "name"}>enter name : </label> 
        <input id={user + "name"} type="text" placeholder="enter name" />  <br /><br />

         <label htmlFor={user + "pass"}>enter pass : </label> 
        <input id={user + "pass"} type="text" placeholder="enter pass" />  <br /><br />

         <label htmlFor={user + "skills"}>enter skills : </label> 
        <input id={user + "skills"} type="text" placeholder="enter skills" />  <br /><br />

        <input id={user + "terms"} type="checkbox" placeholder="" />
        <label htmlFor={user + "terms"}>terms and condition</label>



      </form>
      </>
      )
}
    export default App;