 
import './App.css'; 
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
 import Profile from './Components/Profile'; 
 import Counter from './Components/Counter';
 import MesgClass from './Components/MesgClass'; 
 import EventFun from './Components/EventFun'
 import EventClass from './Components/EventClass'; 
 import FetchJsonData from './Components/FetchJsonData'; 
import UseStateHook from './Components/UseStateHook'
 import BootstrapForm from './Components/BootstrapForm';
 import AntDForm from './Components/AntDForm';
import GetApi from './Components/GetApi';  
import DetialsCard from './Components/DetialsCard';
 import PostApi from './Components/PostApi';
 import Home from './Components/Home';
import {Layout, Button } from 'antd';
import Parent from './Components/Parent';
import Child from './Components/Child';
import Parents2 from './Components/Parents2';
import ServiceUse from './Components/ServiceUse';
const { Header,  Content } = Layout;


function App() {

  return (	 
	<>  
	< ServiceUse />
	{/* <Parent />  */}
	{/* <Layout>
	<Router>
		<Header> 
			<ul style={{listStyle: 'none', display:'flex', gap:'5px'}}>
			<Link to={"/" } ><li className='pl-2'><Button>Home</Button></li></Link>
			<Link to={"/mesgProps" } ><li className='pl-2'><Button>Pops - Class</Button></li></Link>
			<Link to={"/counter_state" } ><li className='pl-2'><Button>Counter : state</Button></li></Link>
			<Link to={"/clickEvent" } ><li className='pl-2'><Button>Click Event</Button></li></Link>
			<Link to={"/bootstrap_form" }><li className='pl-2'><Button>BootStrap Form</Button></li></Link>
			<Link to={"/antd_form" } ><li className='pl-2'><Button>AntD Form</Button></li></Link>
			<Link to={"/fetch_json_data" } ><li className='pl-2'><Button>Fetch Json Data</Button></li></Link>		
			<Link to={"/fetch_api" } ><li className='pl-2'><Button>API - Fetch</Button></li></Link>
			<Link to={"/post_api" } ><li className='pl-2'><Button>API - Post</Button></li></Link>	 
			<Link to={"/fprops_child" } ><li className='pl-2'><Button>F - Props with Child</Button></li></Link>
			<Link to={"/fuseState" } ><li className='pl-2'><Button>F - UseState</Button></li></Link>		
			</ul> 
		</Header>

		<Content className='p-5'>	 
			<Routes>
			<Route path="/" element={< Home />} />
				<Route path="/details/:id" element={< DetialsCard  />} />
				<Route path="/fetch_api" element={< GetApi />} />
				<Route path="/post_api" element={< PostApi />} />
				<Route path="/bootstrap_form" element={< BootstrapForm />} />
				<Route path="/antd_form" element={< AntDForm />} />
				<Route path="/fetch_json_data" element={< FetchJsonData />} />
				<Route path="/counter_state" element={< Counter />} />
				<Route path="/mesgProps" element={< MesgClass  fname="Test" lname="Name"/>} />
				<Route path="/clickEvent" element={< EventClass />} />
				<Route path="/fEvent" element={< EventFun />} />
				<Route path="/fprops_child" element={< Profile  userName="John" > <h6>This is Child Data</h6></Profile> } />
				<Route path="/fuseState" element={< UseStateHook /> } />		
			</Routes> 
		</Content> 
		</Router>
		</Layout>  */}
	</> 
  ) 
}

export default App;
