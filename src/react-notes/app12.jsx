// import { useState } from "react";

// function Checkboxes() {
    
//     const [skills, setSkills] = useState([]);
//     const handleSkills = (event) => {
//         console.log(event.target.value, event.target.checked);
//         if (event.target.checked) {
//             setSkills([...skills , event.target.value])
//         }else{
//             setSkills( [...skills.filter( (item) => item != event.target.value) ] )
//         }
//     }
//     return (
//         <>
//             <h3>select your skills</h3>
//             <input onChange={handleSkills} type="checkbox" placeholder="" id="html" value="html" />
//             <label htmlFor="html">html</label><br />

//             <input onChange={handleSkills} type="checkbox" placeholder="" id="jsx" value="jsx" />
//             <label htmlFor="jsx">jsx</label><br />

//             <input onChange={handleSkills} type="checkbox" placeholder="" id="cpp" value="cpp" />
//             <label htmlFor="cpp">cpp</label> <br />

//             <h3>{skills.toString()}</h3>
//         </>
//     )
// }
// export default Checkboxes;

// import "./App.css"; // Importing CSS for styling
// import Checkboxes from "./components/Checkboxes";

// function App() {

//   return (
//     <>
//     <h3>handle Checkboxes in react </h3>
//     <Checkboxes />
    
//     </>
//   );
// }

// export default App;
