// import { useState } from "react";
// import "./App.css";
// import College from "./components/CollegeContext";
// import { SubjectContext } from "./components/ContextData";



// function App() {

//   const [subject, setSubject] = useState("")

//   return (
//     <>
//     <div style={{backgroundColor:'yellow', padding:'5px'}}>
//         <SubjectContext.Provider value={subject}>
//           <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
//             <option value="">select subject</option>
//             <option value="science">science</option>
//             <option value="english">english</option>
//             <option value="biology">biology</option>
//             <option value="hindi">hindi</option>
//           </select>
//           <h1>context api</h1>
//           <button onClick={()=>setSubject('')}>clear subject</button>
//           <College />
//         </SubjectContext.Provider>
//     </div>
//     </>
//   )
// }
// export default App;

// import { useContext } from "react";
// import { SubjectContext } from "./ContextData";

// function SubjectComponent() {
//  const subject = useContext(SubjectContext)
// return(
// <>
// <div style={{backgroundColor:'red', padding:'5px'}}>
// <h1>subject is : {subject}</h1>
// </div>
// </>
// )
// }
// export default SubjectComponent;


// import SubjectComponent from "./SubjectComponent";

// function StudentComponent() {
 
// return(
// <>
// <div style={{backgroundColor:'lightgreen', padding:'5px'}}>
//   <h1>student component</h1>
//   <SubjectComponent />
// </div>
// </>
// )
// }
// export default StudentComponent;


// import { createContext } from "react";

// export const SubjectContext = createContext('math')


// import ClassComponent from "./ClassComponent";

// function College() {
 
// return(
// <>
// <div style={{backgroundColor:'orange', padding:'5px'}}>
//   <h1>College Component</h1>
//   <ClassComponent />
// </div>
// </>
// )
// }
// export default College;


// import StudentComponent from "./StudentComponent";

// function ClassComponent() {
 
// return(
// <>
// <div style={{backgroundColor:'lightblue', padding:'5px'}}>
//   <h1>class component </h1>
//   <StudentComponent />
// </div>
// </>
// )
// }
// export default ClassComponent;