// import "./App.css";
// import User from "./components/User";

// function App() {

//   const usersData = [

//     {
//       name: 'shivam netke',
//       age: 21,
//       email: 'shivam@gmail.com'
//     },

//     {
//       name: 'rushikesh kokate',
//       age: 22,
//       email: 'rushikesh@gmail.com'
//     },

//     {
//       name: 'omkar borde',
//       age: 23,
//       email: 'omkar@gmail.com'
//     },

//     {
//       name: 'joy gajbhiv',
//       age: 24,
//       email: 'joy@gmail.com'
//     },

//     {
//       name: 'sahil mate',
//       age: 25,
//       email: 'sahil@gmail.com'
//     },

//     {
//       name: 'sarthak shinde',
//       age: 26,
//       email: 'sarthak@gmail.com'
//     }

//   ]

//   return (
//     <>
//       <h2>Reuse component in loop</h2>
//       <hr /><br />
//       {
//         usersData.map((user, index)=>(
//           <div key={index}>            
//             <User data = {user}/>
//             <hr />
//           </div>
//         ))
//       }

//     </>
//   );
// }

// export default App;


// const User = ({ data }) => {
//     return (
//         <>
//             <div style={{ border: '1px solid green', borderRadius: '10px ' }}>
//                 <h4>name : <span style={{ color: '#034875' }}>{data.name}</span></h4>
//                 <h4>age : {data.age}</h4>
//                 <h4>email : {data.email}</h4>
//             </div>

//         </>
//     )
// }

// export default User;