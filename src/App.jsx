import { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {

  const [color, setColor] = useState('red')

  return (
    <>
      <h2>clock app</h2>
      <select onChange={(event) => setColor(event.target.value)}
        style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', border: '1px black solid' }}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>

      </select>
      <Clock color={color} />
    </>
  );
}

export default App;
