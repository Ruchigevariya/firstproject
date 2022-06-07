import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            Count: 0
        }

    }

    Increament = () => {
        if(this.state.Count <10){
            this.setState({
                Count: (this.state.Count+1)
            });
        }
    }
    
    Decreament = () => {
        if(this.state.Count > 0){
            this.setState({
                Count: (this.state.Count-1)
            });
        }
    }
    // ComponentDidUpdate

    ComponentDidUpdate = (prevProps ,prevState) => {
        if(this.state.Count !== prevState.Count){
        }
    }
    render() {
        return (
            <div>
                <button onClick = {() => this.Increament()}>Counter +</button>
                <p>{this.state.Count}</p>
                <button onClick = {() => this.Decreament()}>Counter -</button>
            </div>
        );
    }
}

export default Counter;