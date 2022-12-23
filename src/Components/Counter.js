import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state={
            count : 0,
        };
    }

    incrementByTwo = () =>{
        this.setState({
            count:this.state.count+1,
          },() => {
                this.setState({
                count:this.state.count+1, 
              })
          }); 
    }

    increment = () =>{
      this.setState({
        count:this.state.count+1,
      }); 
    }

    decrement = () =>{
        this.setState({
            count: this.state.count !=0 ? this.state.count-1: this.state.count,
        })
    }

    render(){
        return (
            <div>
            <h5>Counter Value is : {this.state.count}</h5>
            <button onClick={this.increment}>Increment Counter</button>
            <button onClick={this.incrementByTwo}>Increment Counter by 2</button>
            <button onClick={this.decrement}>Decrement Counter</button>
            </div>
        )
    }
}

export default Counter;