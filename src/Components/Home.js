
import { Component } from "react";   
import Cookies from "universal-cookie";
import { Button, Modal } from 'antd'; 

import { IdleTimerProvider} from 'react-idle-timer'

 
class Home extends Component{
    constructor(props){
        super(props);   


        this.state={
          isModalOpen:false, 
        }

        this.setCookies();  
     
        this.setCookies = this.setCookies.bind(this);
        this.getAllCookies = this.getAllCookies.bind(this);
        this.deleteCookies = this.deleteCookies.bind(this);
        this.onPrompt = this.onPrompt.bind(this);
        this.onIdle = this.onIdle.bind(this);
      //  this.onActive = this.onActive.bind(this);
        this.onAction = this.onAction.bind(this);
        this.logOut = this.logOut.bind(this); 
        this.showModal = this.showModal.bind(this); 

        
       
    }
 
 


    setCookies(){
      const cookies = new Cookies();
      cookies.set('UserAuthSession', 'N9TT9G0AB7FQRANK', { path: '/' });
      }
      getAllCookies () {
          const cookies = new Cookies();
          console.log("AuthToken : " + cookies.get('UserAuthSession')); 
      }
      
      deleteCookies(){
          const cookies = new Cookies();
          cookies.remove('UserAuthSession');

      }
 

    onPrompt() {
      // Fire a Modal Prompt
      console.log('onPrompt')
    }
  
    onIdle()  {
      // Close Modal Prompt
      // Do some idle action like log out your user
      //console.log('You Will be Logged out in 5 Sec !!!')
      this.setState({
        isModalOpen:true, 
      })
      this.timer = setTimeout(() => this.logOut(), 5000);

    
    }

    logOut(){
      console.log('You are Logged out!!!');
      this.deleteCookies(); 
    }
  
    // onActive()  { 
    //   console.log('onActive'); 
    
    // }
  
    onAction(){
      // Do something when a user triggers a watched event
      clearTimeout(this.timer);
      this.getAllCookies(); 

      
      
    }
 


    showModal = () => { 
      this.setState({
        isModalOpen:true,
    }) 
  };

  handleOk = () => { 
    this.setState({
      isModalOpen:false,
  }) 
};


handleCancel = () => { 
  this.setState({
    isModalOpen:false,
}) 
};



    render(){ 
      
        return (  
          <>   
 

          <Modal title="User InActive Alert" open={this.state.isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
        <p>You Will be Logged out in 5 Sec !!!</p>
      </Modal>


 
          <IdleTimerProvider
        timeout={1000 * 5}
        onPrompt={this.onPrompt}
        onIdle={this.onIdle} 
        // onActive={this.onActive}
        onAction={this.onAction}
      ></IdleTimerProvider>
          </>
        )
    }
 
}

export default Home;