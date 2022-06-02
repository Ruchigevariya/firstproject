import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName:'Surat'
        }
    }

    ChangeCity = () => {
        this.setState({
            CityName:'Vadodara'
        })
        // console.log("hello");
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
                <button onClick = {() => this.ChangeCity()}>ChangeCity</button>
            </div>
        );
    }
}

export default City;