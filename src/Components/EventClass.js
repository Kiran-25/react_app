import { Component } from "react";

 

class EventClass extends Component{

     clickEventHnadle = () =>{
        alert("Button CLicked");
    }

   
    render(){

        
        
        return (
            <div>
                <button onClick={this.clickEventHnadle}>Click Event</button>
            </div>
        )
    }
}

export default EventClass;