import { useFormStatus } from 'react-dom';
import './App.css';
function App() {
  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("handleSubmit called");
  }

  function CustomerForm(params) {
    const {pending} = useFormStatus();
    console.log(pending);
    
    return (
      <div>
        <input type="text" placeholder="enter username" /><br /><br />
        <input type="password" placeholder="enter password" /><br /><br />
        <button disabled = {pending}>{pending?'submitting...':'submit'}</button>
      </div>
    )
  }

  return (
    <>
      <h2>useFormStatus Hook </h2>
      <form action={handleSubmit} method="post">
        <CustomerForm />
      </form>
    </>
  );
}

export default App;