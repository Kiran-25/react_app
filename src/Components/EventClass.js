import { Component } from "react";
import { Button } from "antd";

 

class EventClass extends Component{

     clickEventHnadle = () =>{
        alert("Button CLicked");
    }

   
    render(){

        
        
        return (
            <div>
                <Button type="primary" onClick={this.clickEventHnadle}>Click Event </Button>
            </div>
        )
    }
}

export default EventClass;