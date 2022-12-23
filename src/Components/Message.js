import { Component } from "react";

class Message extends Component{
    render(){
      return  <h4>Message code is : {this.props.messageCode}</h4>
    }
}

export default Message;