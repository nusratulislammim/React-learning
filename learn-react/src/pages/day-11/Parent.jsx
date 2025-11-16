import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Parent(){
    const [text, setText] = useState("");
    return(
        <div>
            <h2>Parent Component</h2>

            <ChildA text= {text} setText={setText}/>
            <ChildB text={text}/>
        </div>
    );
}

export default Parent;