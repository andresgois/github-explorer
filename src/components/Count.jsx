import { useState } from "react";

export function Count(){
    const [ count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    return (
        <div>
            <strong>{count}</strong>
            <br />
            <button type="button" onClick={increment}>
                Incrementar
            </button>
        </div>
    );
}