import { Col, Row } from "antd";
import { Component } from "react"; 
import CommonService from "../Services/CommonService";


class Home extends Component{
    
    constructor(){
        super()
        console.log(CommonService(5) ) 
    }
   
    render(){
        return (
            
            <>
 
            <Row>
                <Col sm={24}>
                    <h2>Home Page</h2>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. 
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    </p>
                </Col>
            </Row>
            </>
        )
    }
}

export default Home;