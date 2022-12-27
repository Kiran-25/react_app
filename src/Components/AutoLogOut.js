import { Component } from "react";
import Cookies from "universal-cookie";

class AutoLogOut extends Component{
    
    timoutWarning = 5000;
    timoutLogout = 10000;


    constructor(){
        super();
        this.sendMessage();
        this.setupTimers();
        this.setCookies();
    }

    sendMessage() { 
        this.timer = setTimeout(() => this.IdleTimeoutWarning(), this.timoutWarning);
        this.timerLogout = setTimeout(() => this.IdleTimeout(), this.timoutLogout);
      }

      IdleTimeoutWarning() {
        console.log('You will be logout after 5 Sec time!!!') 
    } 


      IdleTimeout() {
        console.log('You are Logged out!!!')
        this.deleteCookies();
    } 

    resetTimer = () =>{ 
        this.getAllCookies();
        clearTimeout(this.timer);
        clearTimeout(this.timerLogout);
        this.sendMessage();
    }

    setupTimers () {
        document.addEventListener("mousemove", this.resetTimer, false);
        document.addEventListener("mousedown", this.resetTimer, false);
        document.addEventListener("keypress", this.resetTimer, false);
        document.addEventListener("touchmove", this.resetTimer, false);
        document.addEventListener("onscroll", this.resetTimer, false); 
    }





    setCookies(){
        const cookies = new Cookies();
        cookies.set('UserAuthSession', 'N9TT9G0AB7FQRANC', { path: '/' });
    }
    getAllCookies(){
        const cookies = new Cookies();
        console.log("AuthToken : " + cookies.get('UserAuthSession')); 
    }
    
    deleteCookies(){
        const cookies = new Cookies();
        cookies.remove('UserAuthSession');

    }




    render(){
        return(
            <>
            
            
            </>
        )
    }
}

export default AutoLogOut;