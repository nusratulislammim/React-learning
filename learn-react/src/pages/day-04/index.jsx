import React from "react";
import One from "../day-04/One";

const Day04=()=>{
    const student = {
        name:"Meem",
        age:20,
        department:"CSE",
    };
    return (
        <div>
            <h2>Day04: Passing Data via Props</h2>
            <One info={student}/>
        </div>
    );
};

export default Day04;