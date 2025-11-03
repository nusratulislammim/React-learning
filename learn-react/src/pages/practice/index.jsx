import React from "react";
import One from "../practice/One";

function Practice(){
    const student ={
        name:"Nusratul Islam Meem",
        age: 21,
        department: "CSE",
    }
    return(
        <div>
            <h2>Day 04: Components and Props</h2>
            <One info={student}/>
        </div>
    );
};

export default Practice;