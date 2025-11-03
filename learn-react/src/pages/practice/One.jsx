import React from "react";

function One({info}){
    return(
        <div>
            <h3>Name: {info.name} </h3>
            <h3>Age: {info.age}</h3>
            <h3>Department: {info.department}</h3>
        </div>
    );
};

export default One;