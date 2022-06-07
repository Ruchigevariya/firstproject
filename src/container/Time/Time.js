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

        this.timeI = setInterval(() => this.tick(),1000);
    }

    componentDidUpdate = (prevProps ,prevState) => {
        // 4 Called whenever particular state/props Updated.

        if(this.state.time !== prevState.time){
            console.log("componentDidUpdate");
        }
            
    }

    componentWillUnmount = () => {
        // 5 Called whenever we move to another component (Used to release the resources)

        clearInterval(this.timeI);
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