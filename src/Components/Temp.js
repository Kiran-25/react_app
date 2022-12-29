import { Component } from "react";  
import axios from "axios";
import { Spin, Row, Col } from 'antd';
 
// dsd
class Temp extends Component{
    constructor(props){
        super(props)  

        this.state={
            data:null
        }

        
            this.getDataUsingAsync(); 
       
    }

     async getDataUsingAsync(){ 
        let apiResp=  await axios.get('https://jsonplaceholder.typicode.com/posts/20') ;  
        console.log(apiResp);
        
    }

 getData(){
      axios.get('https://jsonplaceholder.typicode.com/posts/20').
        then(resp=>{
            this.setState({
                data:resp.data.title,
            })
            
        }).
        catch(err=>{
            console.log(err)
        }) 

    } 

    componentDidMount(){
        setTimeout(()=>{
            this.getData();
        },2000)
       
    }

 
     
    render(){
        return (
            <>
            <Row className="text-center p-5">
                <Col sm={24}>            
                    {this.state.data === null ? <Spin /> : <p> {this.state.data }</p>}
             </Col>
             </Row>
            
            </>
        ) 
        
    }
}

export default Temp;