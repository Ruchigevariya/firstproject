import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName:'Surat',
            FamousPlace:'Gopitalav'
        }
    }

    ChangeCity = () => {
        this.setState({
            CityName:'Vadodara',
            FamousPlace:' Sayaji Baug Zoo'
        })
        // console.log("hello");
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
                <button onClick = {() => this.ChangeCity()}>ChangeCity</button>
                <p>{this.props.id}{this.props.Country_Name}</p>
                <p>{this.state.CityName === "Surat" ? this.state.FamousPlace : this.state.FamousPlace}</p>
            </div>
        );
    }
}

export default City;