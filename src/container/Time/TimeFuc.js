import React, { useEffect, useState } from 'react';

function TimeFuc(props) {
    const [time,setTime] = useState(new Date())

    const tick = () => {
        setTime(new Date());
    }

    
    useEffect (() => {
        // ComponentDidMount ComponentDidUpdate
        const timeI = setInterval(() => tick(),1000)

        // ComponentWillUnmount
        return () =>{
            clearInterval(timeI)
        }
    }
    ,[time])

    return (
        <div>
          <p>{time.toLocaleTimeString()}</p>  
        </div>
    );
}

export default TimeFuc;