

import { useState } from 'react';
import './App.css';
function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleAddUsers = ()=>{
    setUsers([...users, user])
  }

  const total = users.length;
  const last = users[users.length-1];
  const unique = [...new Set(users)].length;


  return (
    <>

    <h1>drive state in react </h1>

    {/* <h3>total users : {users.length}</h3> */}
    <h3>total users : {total}</h3>
    <h3>last user : {last}</h3>
    <h3>unique users : {unique}</h3>

      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user" />
      <button onClick={handleAddUsers}>add</button>

      {
        users.map((item, index)=>(
          <h4 key={index}>{item}</h4>
        ))
      }
    </>
  );
}



export default App;
