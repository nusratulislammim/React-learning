import React from "react";

function Student (){
    const students = ["Meem","Busra","zisan","Putul"];
    
    return(
        <div>
            <h2>Students list</h2>
            <ul>
                {students.map((student,index)=>
                    (<li key={index}>{student}</li>)
                )}
            </ul>
        </div>
    );
};

export default Student;