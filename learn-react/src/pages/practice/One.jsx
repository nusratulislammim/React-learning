import React, {useState} from "react";

function ClickMe (){
    const [a, set] = useState("Before Click");

    function handleClick(){
        set("Button has been clicked");
    }
    return(
        <div>
            <h2>click the button</h2>
            <h3>{a}</h3>
            <button onClick={()=>{set("hi")}}>Click Me</button>

        </div>
    );
};

export default ClickMe;