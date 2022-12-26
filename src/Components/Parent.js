import React, { Component } from "react";

import Child from './Child'

class Parent extends Component{
    constructor(){
        super();
        this.Child=React.createRef();
    }

    childEventRun= () =>{
        this.Child.current.getAlert();
    }

    render(){
        return(
            <>
            <p>Parent Component</p>
            <button onClick={this.childEventRun}>Access Child Event from Parent Button Click</button>
            <Child ref={this.Child} />
           
            </>
        )
    }
}

export default Parent;