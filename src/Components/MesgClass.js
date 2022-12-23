import { Component } from "react";

class MesgClass extends Component{
    render(){
        const {fname,lname} = this.props;
        return <div>
            <p>Fname : {this.props.fname} {this.props.lname}</p>
            <p>Fname : {fname} {lname}</p>
        </div>
    }
}

export default MesgClass;