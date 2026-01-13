import './App.css';
import { useState } from 'react';
import AddUser from './components/AddUser';
import DisplayUser from './components/DisplayUser';
function App() {

    const [user, setUser] = useState('');


  return (
    <>
    <h1>Lifting State Up in React</h1>
<AddUser user={user} setUser={setUser} />
<DisplayUser user={user} />

    </>
  );
}



export default App;
