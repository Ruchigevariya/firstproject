import React, { useState } from 'react';

function CountryFun(props) {
    const [CountryName,setCountryName] = useState('India')

    const changeCountry  = () => {
        setCountryName ('Germany')
    }
    return (
        <div>
            <p>{CountryName}</p> 
            <button onClick = {() => changeCountry()}>changeCountry</button>
        </div>
    );

}

export default CountryFun;