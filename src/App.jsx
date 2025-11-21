import './App.css';
import { useState } from "react"
import PropsEx from './components/Props';
import CollegeFun from './components/College';
import Student from './components/Student';

function App() {

  const [count, setCount]=useState(1);
  // let name = "shivamNetke";
  // let age = 21;
  // let email = "netkeshiv3521@gmail.com"

  let userObject1 = {
    name : "shivam netke",
    age : 21,
    email : "netkeshiv3521@gmail.com",
  }

  let userObject2 = {
    name : "jarvis",
    age : 0,
    email : "jarvis@gmail.com",
  }

  let CollegeName = ['aca', 'n a c s c a', 's c']

  const [student, setStudent] = useState()

  return (
    <>
      
      <button onClick={()=>{setStudent("shivamNetke")}}>update student name</button>
      <button onClick={()=>{setStudent("")}}>remove student name</button>
      {student && <Student name={student} />}


    </>
  );
}

export default App;
