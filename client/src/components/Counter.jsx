import React, { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ margin: "2rem" }}>
            <p>Compteur : {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
}
