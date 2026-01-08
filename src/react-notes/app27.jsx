import './App.css';
import { useRef } from 'react';
function App() {
  const inputController = useRef(null)
  const h1Ref = useRef()

  const inputHandler = () => {
    console.log(inputController);
    inputController.current.focus();
    inputController.current.style.color='red';
    inputController.current.placeholder='enter password';
    inputController.current.value="pass123"

  }

  const toggleHandler = () =>{
    if (inputController.current.style.display!='none') {
      inputController.current.style.display='none';
    }
    else {
      inputController.current.style.display='inline'
    }
  }

  const h1handler = () => {
    h1Ref.current.style.color='green'
  }

  return (
    <>
      <h4>useRef hooks</h4>
      <button onClick={toggleHandler}>toggle</button>
      <input ref={inputController} type="text" placeholder="enter user name" />
      <button onClick={inputHandler}>focus on input field</button>

    <h1 ref={h1Ref}>hello shivam</h1>
    <button onClick={h1handler}>handler</button>

    </>
  );
}

export default App;
