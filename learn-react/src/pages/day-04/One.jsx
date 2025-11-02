import React from "react";

function One({info}){
    return(
        <div>
            <h3>Student Information</h3>
            <p>Name: {info.name}</p>
            <p>Age:{info.age}</p>
            <p>Department: {info.department}</p>
        </div>
    );
};

export default One;