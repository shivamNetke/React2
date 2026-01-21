import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function SubjectComponent() {
 const subject = useContext(SubjectContext)
return(
<>
<div style={{backgroundColor:'red', padding:'5px'}}>
<h1>subject is : {subject}</h1>
</div>
</>
)
}
export default SubjectComponent;