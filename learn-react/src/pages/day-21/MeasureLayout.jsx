import { useRef, useLayoutEffect, useState } from "react";


function MeasureLayout (){
    const boxRef = useRef(null);
    const [size, setSize] = useState({width: 0, height: 0});

    useLayoutEffect(()=>{
        const rect = boxRef.current.getBoundingClientRect();
        setSize ({
            width: rect.width,
            height: rect.height
        });
    },[])

    return(
        <div>
            <h2>UseLayoutEffect</h2>
            <div
            ref={boxRef}
            style={{
                width:"200px", height:"150px", backgroundColor:"lightblue"
            }}
            >
                Measure me!
            </div>
            <h3>Width: {size.width}px</h3>
            <h3>Height: {size.height}px</h3>
        </div>
    );
}

export default MeasureLayout;