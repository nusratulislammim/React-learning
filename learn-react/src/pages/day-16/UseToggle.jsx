import { useState } from "react";

function UseToggle(initialValue = false){
    const[value,setValue] = useState(initialValue);

    const toggle=()=>{
        setValue((prev)=>!prev);
    };
    return [value,toggle];
}

export default UseToggle;