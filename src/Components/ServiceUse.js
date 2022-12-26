import { Component } from "react";
import CommonService from "../Services/CommonService"; 

class ServiceUse extends Component{

    
    constructor(){
        super()
        this.state={
            addition:CommonService.addition(5),
            multiplication : CommonService.multiplication(5)
        }

        //this.update = this.update.bind(this);
 
    }

    update (parm) {
        this.setState({
           addition:CommonService.addition(parm)
        }) 
    }

   updateMult(parm){
    this.setState({
        multiplication:CommonService.multiplication(parm),
    })
   } 
   
    updateNew = (event) =>{ 
        alert(event.target.value)
    }


    render(){
        return(
            <>
            {this.state.addition}&nbsp;:&nbsp;
            {this.state.multiplication}

            <button onClick={this.updateNew} value={20}>Pass Parm using Target Value</button> 


            <button onClick={() => this.update(20)}>Update Addition Value : Pass parm using arrow</button> 
            <button onClick={() => this.updateMult(8)}>Update Multiplication Value  : Pass parm using arrow</button> 
            </>
        )
    }
}

export default ServiceUse;