import { useEffect } from "react";

function SecondCounter({count, data}) {

    const handleCounter = () => {
        console.log("handleCounter called");
        
    }

    const handleData = () =>{
        console.log("handle Data called");
        
    }

    useEffect(()=>{
        handleCounter();
    }, [])

    useEffect(()=>{
        handleData();
    }, [data])

return(
<>
    <h1>counter value : {count}</h1>
    <h1>data value : {data}</h1>
</>
)
}
export default SecondCounter;