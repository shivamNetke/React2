import { useActionState } from "react";
import "./App.css";



function App() {

  const handleSubmit = async(previousData, formData) =>{
    let name = formData.get('name')
    let password = formData.get('password')

    await new Promise(res=>setTimeout(res, 2000))
    
    console.log("handlesubmit called", name, password);

    if (name && password) {
      return {message:'data submitted', name, password}
    }
    else{
      return{error:'failed to submit', name, password}
    }
    
  }

  const [data, action, pending] = useActionState(handleSubmit, undefined)
  console.log(data);
  

  return (
    <>
      <h2>useActionState hook</h2>
      <form action={action} method="post">
        <input defaultValue={data?.name} type="{text}" placeholder="enter name " name="name" />
        <br /><br />
        <input defaultValue={data?.password} type="{text}" placeholder="enter password" name="password" />
        <br /><br />
        <button disabled={pending}>submit</button><br /><br />
        </form>

        {
          data?.error && <span style={{color:'red'}}>{data.error}</span>
        }
        {
          data?.message && <span style={{color:'green'}}>{data.message}</span>
        }

        <h3>name : {data?.name}</h3>
        <h3>password : {data?.password}</h3>




    </>
  )
}

export default App;