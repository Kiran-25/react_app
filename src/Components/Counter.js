import { Component } from "react";
import { Button } from "antd";

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
            <Button type="primary" style={{marginRight:'5px'}} onClick={this.increment} >Increment Counter </Button>
            <Button type="primary" style={{marginRight:'5px'}}  onClick={this.incrementByTwo}>Increment Counter by 2</Button>
            <Button type="primary" style={{marginRight:'5px'}} onClick={this.decrement}>Decrement Counter</Button>
            </div>
        )
    }
}

export default Counter;