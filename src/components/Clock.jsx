import { useEffect, useState } from "react";

const Clock = ({color}) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }, [])

    return (
        <div>
            <h2
                style={{ color: color, backgroundColor: 'white', borderRadius: '5px', border: '1px solid black' }}
            >{time}</h2>
        </div>
    )
}
export default Clock;