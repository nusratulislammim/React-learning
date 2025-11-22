import { forwardRef, useImperativeHandle, useRef } from "react";


const ChildInput = forwardRef(function ChildInput(props, ref){
    const inputRef = useRef(null);

    useImperativeHandle(ref, ()=>({
        focus(){
            inputRef.current.focus();
        },
        clear(){
            inputRef.current.value = "";
        },
        sayHello(){
            alert("Hello from child!");
        }
    }));
    return(
        <input ref={inputRef} type="text" placeholder="Type here..."/>
    );
});

export default ChildInput;