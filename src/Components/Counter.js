import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state={
            count : 0,
        };
    }

    increment = () =>{
        console.log(this)
        this.setState({
            count: this.state.count+1,
        })
    }

    decrement = () =>{
        this.setState({
            count:this.state.count-1,
        })
    }

    render(){
        return (
            <div>
            <h5>Counter Value is : {this.state.count}</h5>
            <button onClick={this.increment}>Increment Counter</button>
            <button onClick={this.decrement}>Decrement Counter</button>
            </div>
        )
    }
}

export default Counter;