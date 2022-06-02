import React, { useState } from 'react';

function CityFun(props) {
    const [CityName,setCityName] = useState('Surat')

    const ChangeCity = () =>{
        setCityName ('Vadodara') 
    }
    return (
        <div>
           <p>{CityName}</p> 
           <button onClick = {() => ChangeCity()}>ChangeCity</button>
        </div>
    );
}

export default CityFun;