import { Component } from "react";

class MesgClass extends Component{
    render(){
        const {fname,lname} = this.props;
        return <div>
            <p>First name : {this.props.fname} </p>
            <p>Last Name : {lname}</p>
        </div>
    }
}

export default MesgClass;