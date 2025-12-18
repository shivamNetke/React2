import Card from "./components/Card";
import "./css/style1.css";
function App() {

  return (
    <>
      <h2 className="heading">external css in jsx</h2>

      <div className="container">

        {/* card start */}

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      
        {/* card ends */}

      </div>
    </>
  );
}

export default App;
