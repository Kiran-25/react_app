import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component{
  
    constructor(props){
        super(props);
        this.Child=React.createRef();
    }

    onClickChild  = () =>{
        this.Child.current.getAlert();
    };
    render(){
        return(
            <>
            <p> Parent Component</p>
            <button onClick={this.onClickChild}>Access Child Function</button>
            <Child ref={this.Child} />
            </>
        )    
    }
}

export default Parent;