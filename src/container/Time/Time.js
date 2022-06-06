import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
       
        // 1 Used to set Initial value to the component.
        
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
        // 3 Used to request data from server.

        this.setI = setInterval(() => this.tick(),1000);
    }

    componentDidUpdate = (prevProps ,prevState) => {
        // 4 Called whenever particular state/props Updated.

        if(prevState !== this.setI)
        console.log("componentDidUpdate");
    }

    componentWillUnmount = () => {
        // 5 Called whenever we move to another component (used to release the resources)
        clearInterval(this.setI);
    }

    // 2 Called whenever state value changed
    render() {
        return (
            <div>
               <p>{this.state.time.toLocaleTimeString()}</p> 
            </div>
        );
    }
}

export default Time;