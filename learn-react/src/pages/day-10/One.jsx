import React from "react";
import {useRef} from "react";

function UncontrolledInput(){
    const inputRef = useRef(null);

    function handleFocus(){
        inputRef.current.focus();
    }

    function showValue(){
        alert (inputRef.current.value);
    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type something"/>
            <button onClick={handleFocus}>Focus Input</button>
            <button onClick={showValue}>Show Value</button>
        </div>
    );
}

export default UncontrolledInput;