import { Component } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AntD from './AntD';
import SimpleForm from './SimpleForm'; 

class Temp extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         data: [{"id":4},{"id":5}]
    //     }
    // }
    // extraDataIntoState = ()=>{
    //     this.setState(res=>({
    //         data:[...res.data, {"id":6}] ,
    //     }))
    // }
    render(){
        return (
            <>

<Router>
	<div >
	<ul className=" ">
<li>
<Link to="/">Ant D</Link>
</li>
<li>
<Link to="/SimpleForm/20">SimpleForm</Link>
</li>
</ul>
<Routes>
<Route exact path='/' element={< AntD />}></Route>
<Route  exact path='/SimpleForm/:id' element={< SimpleForm />}></Route> 
</Routes>
</div>
</Router>

          
            
            {/* {this.state.data.map(home => <div key={home.id}>{home.id}</div>)} */}
            {/* <ul>
        {this.state.data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul> */}
            {/* <h2>Temp</h2>

            <button onClick={this.extraDataIntoState}>Push</button> */}
            </>
        )
    }
}

export default Temp;