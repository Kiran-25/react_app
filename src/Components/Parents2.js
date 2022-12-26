import { Component } from "react";
import Child2 from "./Child2";

class Parnts2 extends Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }
    parentCallback = (dataParm) =>{
        this.setState({
            data:dataParm
        })
    }

    render(){
        const {data} =this.state;
   
        return(           
            <>
            <p>Parent Compoenent</p> 
            {data}
            
            <Child2 passDatatoParent = {this.parentCallback} />
          
            </>
        )
    }
}

export default Parnts2