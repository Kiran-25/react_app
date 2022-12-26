import { Component } from "react";
class Child extends Component{
    getAlert(){
        alert('Child GetAlert Accessed')
    }
    render(){
        return(
            <>
            <p>Child Component</p>
            <button onClick={this.getAlert}>Child Click Access Child Data</button>
            </>
        )
    }
}

export default Child;