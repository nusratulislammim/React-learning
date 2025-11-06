import React from "react";

function FruitsList(){
    const fruits = ["Apple","Mango","Banana","Orange"];

    return(
        <div>
            <h2>Task: Render an array of items using .map()</h2>
            <h2>Fruits List:</h2>
            <ul>
                {fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default FruitsList;