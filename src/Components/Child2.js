import { Component } from "react";

class Child2 extends Component{
    constructor(props){
        super(props)
        this.props.passDatatoParent('This data comes from child Construcotr Compoenent');

    }

    passData = () =>{
        this.props.passDatatoParent('This data comes from child Button Click Compoenent');
    }
    
    render(){
        return(
            <>
            <p>Child Compoenent</p>
            <button onClick={this.passData}>Pass Data to Parent</button> 
            </>
        )
    }
}

export default Child2;