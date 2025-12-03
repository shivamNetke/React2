import './App.css';
import Wrapper from './components/Wrapper';

function App() {

  return (
    <>
      <Wrapper color="blue">
          <h1 style={{margin:"100px"}}>hello everyone</h1>
      </Wrapper>

      <Wrapper>
          <h1>hello shivam</h1>
      </Wrapper>

      <Wrapper color="pink">
          <h1 style={{margin:"100px"}}>hello everyone</h1>
      </Wrapper>
      
      <Wrapper>
          <h1 style={{margin:"100px"}}>hello everyone</h1>
      </Wrapper>
    </>
  );
}

export default App;

