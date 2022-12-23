import { Component } from "react";

class SimpleForm extends Component{
    
    constructor(){
        super();
         this.state={
            fname:'',
            address:''
         };
    }

    handelNameChange = (event)=>{
        //CHeck number validation
        // let numm=/\d/; 
        // console.log(numm.test(event.target.value))

        this.setState({
            fname:event.target.value
        });
    }

    handelAddressChange = (event) =>{
        this.setState({
            address: event.target.value,
        })
    }

    handeSubmit = (event) =>{
        alert(this.state.address +" -- "+ this.state.fname );
        event.preventDefault();
    }
    render(){
        return (
            <div> 
        <h2>Form Input</h2>

        {this.state.fname} == 
        {this.state.address}
        <form onSubmit={this.handeSubmit}>
            <label>Name :
                <input  type='text' value={this.state.fname} onChange={this.handelNameChange} placeholder='Input Name' required/>
            </label>

            <label>Address
                <textarea value={this.state.address} onChange={this.handelAddressChange} required ></textarea>
            </label>
  <input type="submit" value="Submit" />
            
        </form>
      </div>
        );
    }
}

export default SimpleForm;