import React, { useState } from 'react';

function CounterFun(props) {
    const [counter , setCounter] = useState(0)

    const increament = () => {
        if(counter < 10){
            setCounter(counter + 1)
        }
    }

    const decreament = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <button onClick={() => increament()}>+</button>
            <p>{counter}</p>
            <button onClick={() => decreament()}>-</button>
        </div>
    );
}

export default CounterFun;