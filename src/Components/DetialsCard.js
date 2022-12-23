 import axios from "axios";
import { Component } from "react";
import { Row, Col, Card  } from "antd";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
    class DetialsCard extends Component{
        constructor(){
            super();
            this.state={
                dataId:'',
                dataTitle:'',
                dataBody:''
            };
        } 
    
        getApi = () =>{
            axios.get('https://jsonplaceholder.typicode.com/posts/20').
            then((res)=>{  
                    console.log(res)
                    console.log(res.data.userId)
                    this.setState({                    
                        dataId:res.data.userId ,
                        dataTitle:res.data.title ,
                        dataBody:res.data.body ,
                    }) 
                               
            }).catch(err=>{
                console.log(err)
            })

             
        }

        componentDidMount() {
            this.getApi();
          }

        render(){
            return (
                <>
                
                
                 <h4>Get Api On Button CLick</h4>
                        <button onClick={this.getApi}>Click To Fetch</button>

                        Id : {this.state.dataId}<br />
                        Title :  {this.state.dataTitle}<br />
                        Body :  {this.state.dataBody}<br/>
                </>
            )
        }
    }

export default DetialsCard;