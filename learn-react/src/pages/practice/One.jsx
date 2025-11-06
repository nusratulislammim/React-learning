import React, {useState} from "react";

function ClickMe (){
    const [text, setText] = useState("Before Click");

    function handleClick(){
        setText("Button has been clicked");
    }
    return(
        <div>
            <h2>click the button</h2>
            <h3>{text}</h3>
            <button onClick={handleClick}>Click Me</button>

        </div>
    );
};

export default ClickMe;