import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function App() {

  return (
    <>
      <Button variant='danger'>ok</Button>
      <Button variant='success'>ok</Button>
      <Button variant='warning'>ok</Button>

      <Alert variant="success">hello world</Alert>
      <Alert variant="primary">hello world</Alert>
      <Alert variant="danger">hello world</Alert>


    </>
  );
}

export default App;