import { Component } from "react";
import { Row, Col, Card } from "antd";
import axios from "axios";

class PostApi extends Component{
    postAPI= () => {

        const headers = { 
            'Authorization': 'Bearer my-token' 
        };
        
        const article = { title: 'Axios POST Request Example' };
        axios.post('https://reqres.in/api/articles', article, { headers })
            .then(response =>{ alert('Done : ' + response.data.id);
            console.log(response);
        })
            .catch(error => {
                console.log("Error" + error)
            });


    
    }
    render(){
        return (
            <>
                <Row className="m-0" >
                    <Col sm={12} >
                        <Card>
                        <h4 >Post Api Call</h4>
                        <button onClick={this.postAPI}>Click On Post API</button>
                        </Card>
                    </Col>
                </Row>
               
            </>
        )
    }
}

export default PostApi;