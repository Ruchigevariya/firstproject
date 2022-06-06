import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date()
        }

    }

    tick = () =>{
        this.setState({
            time: new Date()
        })
    }
    
    componentDidMount = () => {
        this.setI = setInterval(() => this.tick(),1000);
    }

    componentDidUpdate = (prevProps ,prevState) => {
        if(prevState !== this.setI)
        console.log("componentDidUpdate");
    }

    componentWillUnmount = () => {
        clearInterval(this.setI);
    }

    render() {
        return (
            <div>
               <p>{this.state.time.toLocaleTimeString()}</p> 
            </div>
        );
    }
}

export default Time;