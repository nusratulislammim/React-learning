import { useRef } from "react";
import ChildInput from "./ChildInput";

function Parent(){
    const childRef = useRef(null);

    function focusChildInput(){
        childRef.current.focus();
    }

    return(
        <div>
            <ChildInput ref={childRef}/>
            <button onClick={focusChildInput}>Focus Child input</button>
        </div>
    );
}
export default Parent;