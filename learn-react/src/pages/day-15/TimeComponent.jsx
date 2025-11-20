import { useEffect, useState } from "react";

function TimerComponent(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Component Mounted");
        const intervalId = setInterval(()=>{
            setCount((prev)=> prev+1);
    },1000);

    return () =>{
        console.log("Component Unmounted, Timer Cleared");
        clearInterval(intervalId);
        
    };
        
    },[]);

    return(
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}
export default TimerComponent;