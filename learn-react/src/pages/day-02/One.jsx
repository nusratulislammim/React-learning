import React from "react";

function three (props){
    
    const Time = new Date().toLocaleDateString();
    let greetMsg;
    if(props.name){
        greetMsg = `Hello, ${props.name}!`;
    }
    else{
        greetMsg = "Hello, World!";
    }

    return(
        <div>
            <h2>{greetMsg}</h2>
            <p>Welcome to React JSX learning.</p>
            <p>Current time:{Time}</p>
        </div>
    );
}

export default three;