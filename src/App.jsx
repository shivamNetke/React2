import './App.css';
    const fruit=(name)=>{
      alert(name)
    }
      let a = 'apple'
function App() {
      function callFun() {
      alert("callFun function called")
    }

    const arrowFunction=()=>{
      alert("arrow function called")
    }

    // const fruit=(name)=>{
    //   alert(name)
    // }
    //   let a = 'apple'
return (
  <>

    <button onClick={callFun}> call callFun </button>
    <br/>
    <br/>
    <button onClick={arrowFunction}> call arrowFunction </button>
    <br/>
    <br/>
    <button onClick={()=>fruit(a)}> call fruit </button>

    </>
  );
}

export default App;
