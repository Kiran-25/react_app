import { useState } from "react";
import { Button } from "antd";

const UseStateHook = () => {
    const onAddClick =() =>{       
        UpdateCurrentCount(prev=>prev + 1);
        UpdateCurrentCount(prev=>prev + 1);
    }
    const [currentCount, UpdateCurrentCount]= useState(() => {
        return 0;
    });

    const onDecClick = () =>{
        UpdateCurrentCount (pre=> pre !== 0 ? pre - 1: pre);
    }
    return (
        <>
    <h2>Use State Hook works</h2>
    <Button type="primary" onClick={onAddClick}>Add</Button>
    &nbsp; Count is : {currentCount} &nbsp;
    <Button type="primary" onClick={onDecClick}>Minus</Button>
    </>
    )
}

export default UseStateHook;