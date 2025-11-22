import { forwardRef } from "react";

const ChildInput = forwardRef(function ChildInput(props, ref){
    return <input ref={ref} type="text" placeholder="Child Input" />
});

export default ChildInput;