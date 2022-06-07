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

        if(this.state.time !== prevState.time){
            console.log("componentDidUpdate");
        }
            
    }

  1

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