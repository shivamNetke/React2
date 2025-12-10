// import "./App.css";
// import RadioBtn from "./components/RadioBtn";

// function App() {

//   return (
//     <>
//       <h1>radio button in jsx</h1>
//       <RadioBtn />
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function RadioBtn() {

//     const [gender, setGender] = useState('male');

//     return (
//         <>
//             <h3>select gender : </h3>

//             <input onChange={(event) => setGender(event.target.value)} type="radio" name="gender"
//                 value={"male"} checked={gender == 'male'} id="male" />   {/* mark checked radio button if bydefault gender is male*/}
//             <label htmlFor="male">male</label>

//             <input onChange={(event) => setGender(event.target.value)} type="radio" name="gender"
//                 value={"female"} checked={gender == 'female'} id="female" /> {/* mark checked radio button if bydefault gender is female*/}
//             <label htmlFor="female">female</label>

//             <h4>selected gender : {gender}</h4>
//         </>
//     )
// }
// export default RadioBtn;