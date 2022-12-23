const EventFun =()=>{
    const EventCall=()=>{
        alert('Button Clicked');
    }
    return <div>
        <button onClick={EventCall}>Alert Button Click</button>
    </div>
}

export default EventFun;