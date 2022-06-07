import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0
        }

    }

    increament = () => {
        if(this.state.counter < 10){
            this.setState({
                counter: (this.state.counter+1)
            });
        }
    }
    
    decreament = () => {
        if(this.state.counter > 0){
            this.setState({
                counter: (this.state.counter-1)
            });
        }
    }

    // ComponentDidUpdate

    ComponentDidUpdate = (prevProps ,prevState) => {
        if(this.state.count !== prevState.count){
        }
    }
    render() {
        return (
            <div>
                <button onClick = {() => this.increament()}>Counter +</button>
                <p>{this.state.counter}</p>
                <button onClick = {() => this.decreament()}>Counter -</button>
            </div>
        );
    }
}

export default Counter;