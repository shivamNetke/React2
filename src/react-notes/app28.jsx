// import './App.css';
// import UserChild from './components/UserChild';
// function App() {

//   const displayName = (param) =>{
//     alert(param)
//   }

//   const getUser = () =>{
//     console.log("getuser called");
//   }

//   return (
//     <>
//     <h2>call parent component from child component </h2>
//     <UserChild prop = {displayName} name="shivam" />
//     <UserChild prop = {displayName} name="virat" getUser = {getUser}/>

//     </>
//   );
// }

// export default App;
// function UserChild({ prop, name, getUser }) {
//     return (
//         <>
//             <button onClick={() => prop(name)}>display name</button>
//             <button onClick={() => getUser()}>getuser</button>
//         </>
//     )
// }
// export default UserChild;                       