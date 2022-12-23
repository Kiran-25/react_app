 import axios from "axios";
import { Component } from "react";
import { Row, Col, Card  } from "antd";   
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
            const cardId=window.location.href.split('/')[4];
            axios.get('https://jsonplaceholder.typicode.com/posts/'+cardId).
            then((res)=>{   
                    this.setState({                    
                        dataId:res.data.id ,
                        dataTitle:res.data.title ,
                        dataBody:res.data.body ,
                    }) 
                               
            }).catch(err=>{
                console.log(err)
            })

             
        }

        componentDidMount() {
            this.getApi();
            console.log("componentDidMount")
          }

           
        render(){
            return (
                <>
                
                <Row>
                    <Col sm={24}>
                        <Card> 
                    Id : {this.state.dataId}<br />
                    Title :  {this.state.dataTitle}<br />
                        Body :  {this.state.dataBody}<br/>
                        </Card>
                    </Col>
                </Row>
         
                </>
                
            )
        }
    }

export default DetialsCard;