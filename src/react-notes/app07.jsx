// // function PropsEx({name, age, email}) {
// function PropsEx({user}) {

// // function PropsEx(data) {


//     return(
//         <>
//              {/* <h1>Props Practice</h1>
//             <h1>age : {age}</h1>
//             <h1>name : {name}</h1>
//             <h1>email : {email}</h1>  */}

//             <hr />
//             <h1>Props Practice</h1>
//             <h1>name : {user.name}</h1>
//             <h1>age : {user.age}</h1>
//             <h1>email : {user.email}</h1> 

//         </>
//     )
// }

// export default PropsEx;

// import './App.css';
// import { useState } from "react"
// import PropsEx from './components/Props';

// function App() {

//   const [count, setCount]=useState(1);
//   // let name = "shivamNetke";
//   // let age = 21;
//   // let email = "netkeshiv3521@gmail.com"

//   let userObject1 = {
//     name : "shivam netke",
//     age : 21,
//     email : "netkeshiv3521@gmail.com",
//   }

//   let userObject2 = {
//     name : "jarvis",
//     age : 0,
//     email : "jarvis@gmail.com",
//   }

//   return (
//     <>
//       {/* <PropsEx name= {name} age={age} email={email}/> */}
//       <PropsEx user = {userObject1}/>
//       <br />
//       <PropsEx user = {userObject2}/>


//     </>
//   );
// }

// export default App;
