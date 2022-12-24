import { Component } from "react";
import { Row, Col, Card, Button  } from "antd";
import axios from "axios";
import {  Link } from 'react-router-dom';

class GetApi extends Component{
    constructor(){
        super();
        this.state={
            dataApi:[
            {"id":'','title':'', "body":''}]
        };
    } 

    getApi = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').
        then((res)=>{  
            res.data.map(intData=>{ 
                this.setState(res=>({                    
                    dataApi:[...res.dataApi, {"id":intData.id,'title':intData.title, "body":intData.body}] ,
                })) 
            })                
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return (
            <>
            <Row className="m-0" gutter={[8,8]}>  
                <Col sm={24} type="flex" align="left"> 
                <Button type="primary" onClick={this.getApi}>Fetch Cards</Button>
                </Col>
                    {this.state.dataApi.map(resp => 
                    resp.id ?<Col  key={resp.id}  sm={12} md={8}><Card  style={{height: '100%'}} title={resp.title}   > <p>{resp.body}</p> <Link to={"/details/"+resp.id }>Read More</Link> </Card> </Col>:''
 
            )}
            </Row>
            </>
        )
    }
}
export default GetApi;