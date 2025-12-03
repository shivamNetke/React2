
function Wrapper({children, color="Green"}) {
return(
<div style={{color: color, border:"2px solid red", margin:"10px"}}>
    {children}
</div>
)
}
export default Wrapper;