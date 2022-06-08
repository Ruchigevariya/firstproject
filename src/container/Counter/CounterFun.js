import React, { useEffect, useState } from 'react';

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

    useEffect (() => {
        // ComponentDidUpdate
        console.log("ComponentDidUpdate");
    }
    ,[counter]
    )

    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick = {() => increament()}>+</button>
            <button onClick = {() => decreament()}>-</button>
        </div>
    );
}

export default CounterFun;