import React, { useState } from 'react';

function CityFun({id,Country_Name}) {
    const [CityName,setCityName] = useState('Surat')

    const ChangeCity = () =>{
        setCityName ('Vadodara') 
    }
    return (
        <div>
           <p>{CityName}</p> 
           <button onClick = {() => ChangeCity()}>ChangeCity</button>
           <p>{id}{Country_Name}</p>
           <p>{CityName === "Surat" ? "Gopitalav" : "Sayaji Baug Zoo"}</p>
        </div>
    );
}

export default CityFun;