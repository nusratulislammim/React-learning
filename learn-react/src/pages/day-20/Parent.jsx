import { useRef } from "react";
import ChildInput from "./ChildInput";

function Parent(){
    const childRef = useRef(null);

    return(
        <div>
            <ChildInput ref={childRef}/>
            <button onClick={()=>childRef.current.focus()}>Focus Child Input</button>
            <button onClick={()=>childRef.current.clear()}>Clear Input</button>
            <button onClick={()=>childRef.current.sayHello()}>Say Hello</button>
        </div>
    );
}
export default Parent;