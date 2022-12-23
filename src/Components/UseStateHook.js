import { useState } from "react";

const UseStateHook = () => {
    const onAddClick =() =>{       
        UpdateCurrentCount(prev=>prev + 1);
        UpdateCurrentCount(prev=>prev + 1);
    }
    const [currentCount, UpdateCurrentCount]= useState(() => {
        return 0;
    });

    const onDecClick = () =>{
        UpdateCurrentCount (pre=> pre != 0 ? pre - 1: pre);
    }
    return (
        <>
    <h2>Use State Hook works</h2>
    <button onClick={onAddClick}>Add</button>
    Count is : {currentCount}
    <button onClick={onDecClick}>Minus</button>
    </>
    )
}

export default UseStateHook;