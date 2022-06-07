import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CountryName:'India'
        }
    }

    changeCountry = () =>{
        this.setState({
            CountryName:'Germany'
        })
        // console.log("Hello");
    }
    
    render() {
        return (
            <div>
               <p>{this.state.CountryName}</p> 
               <button onClick = {() => this.changeCountry()}>ChangeCountry</button>
               <City id = '101' Country_Name = {this.state.CountryName}/>
               <p>{this.state.CountryName === "India" ? "Famous place is Tajmahal" : "Famous place is Berlin's Brandenburg Gate"}</p>
            </div>
        );
    }
}

export default Country;