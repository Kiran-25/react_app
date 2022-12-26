import { Component } from "react";
class Child extends Component{
    getAlert() {
        alert('getAlert from Child');
      }

      
    render(){
        return(
            <>
                <p>Child Component</p>
            </>
        )
    }
}
export default Child;