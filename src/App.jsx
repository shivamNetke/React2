import { useRef } from 'react';
import './App.css';
import UserInput from './components/UserInput';
function App() {

  const inputRef = useRef(null);

  const updateInput = () =>{
    console.log("updateInput called ");
    inputRef.current.value=1000;
    inputRef.current.focus(); 
  }

  return (
    <>
    <h2>forward ref </h2>
    <hr />
    <UserInput ref={inputRef}/>
    <button onClick={updateInput}>update input field</button>

    </>
  );
}

export default App;
