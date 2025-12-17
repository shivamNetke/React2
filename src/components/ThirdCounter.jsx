import { useEffect } from "react";

function ThirdCounter({count, data}) {
 
    useEffect(()=> {
        console.log("mounting phase only");
        
    }, [])

    useEffect(()=> {
        console.log("update phase only");
        
    }, [count])

    useEffect(()=> {
        console.log("unmount phase only");
        
    }, [])

return(
<>
    <div>
      <h3>counter value : {count}</h3>
      <h3>data value : {data}</h3>
    </div>
</>
)
}
export default ThirdCounter;        