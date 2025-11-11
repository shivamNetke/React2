import './App.css';
import { useState } from "react"
import Counter from './components/Counter';

function App() {
  const [fruit, setFruit] = useState("apple")
  const setfruitfun = () => {
    setFruit("banana")
  }
  return (
    <>
      <h1>{fruit}</h1>
      <button onClick={setfruitfun}>change fruit</button>
      <Counter />
    </>
  );
}

export default App;
