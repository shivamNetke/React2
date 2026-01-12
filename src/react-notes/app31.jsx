// import './App.css';
// function App() {

//   return (
//     <>
//       <h2>keeping component pure </h2>
//       <Counter count={1}/>
//       <Counter count={2}/>
//       <Counter count={3}/>
//       <Counter count={4}/>

//     </>
//   );
// }

// const Counter =({count})=>{
//   return <h2>count = {count}</h2>
// }

// export default App;


import './App.css';
function App() {

  return (
    <>
      <h2>keeping component pure </h2>
      <Cup guest={1} />
      <Cup guest={5} />

      <Cup guest={3} />

    </>
  );
}

const Cup = ({guest})=>{
  return (<h1>we have {guest} guest need {guest} cup tea</h1>)
}

export default App;
