import React from "react";

function Greeting (props){
    
    const Time = new Date().toLocaleDateString();
    const greetMsg = props.name?`Hello, ${props.name}!`:"Hello, World!";

    return(
        <div>
            <h2>{greetMsg}</h2>
            <p>Welcome to React JSX learning.</p>
            <p>Current time:{Time}</p>
        </div>
    );
}

export default Greeting;