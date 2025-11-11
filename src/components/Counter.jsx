import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>counter = {count}</h1>
            <button onClick={() => setCount(count + 1)}>increase Count</button>
            <button onClick={() => setCount(count - 1)}>decrease Count</button>

            <button onClick={() => setCount(0)}>reset Count</button>

        </div>
    )
}

export default Counter;