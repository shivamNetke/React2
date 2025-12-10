import { useState } from "react";

function Drowpdown() {
    const [city, setCity] = useState("mumbai");
    return (
        <>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue="mumbai">
                <option value="pune">pune </option>
                <option value="mumbai">mumbai </option>
                <option value="thane">thane </option>thane
            </select>
            <h3>selected city : {city}</h3>
        </>
    )
}
export default Drowpdown;