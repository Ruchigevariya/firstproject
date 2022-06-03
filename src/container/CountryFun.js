import React, { useState } from 'react';
import City from './City';
import CityFun from './CityFun';

function CountryFun(props) {
    const [CountryName,setCountryName] = useState('India')

    const changeCountry  = () => {
        setCountryName ('Germany')
    }
    return (
        <div>
            <p>{CountryName}</p> 
            <button onClick = {() => changeCountry()}>ChangeCountry</button>
            <CityFun id = '102' Country_Name = {CountryName}/>
            <p>{CountryName === "India" ? "Tajmahal" : "Berlin's Brandenburg Gate"}</p>
        </div>
    );

}

export default CountryFun;