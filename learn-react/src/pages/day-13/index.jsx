import React from "react";
import FilterableProductTable from "./FilterableProductTable";

function Day13 (){
    const products = [
        {category:"Fruits", price:"100/-",stocked:true, name:"Apple"},
        {category:"Fruits", price:"80/-",stocked:true, name:"Dragonfruit"},
        {category: "Fruits", price: "210/-", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "20/-", stocked: true, name: "carrot"},
        {category: "Vegetables", price: "10/-", stocked: false, name: "Potato"},
        {category: "Vegetables", price: "45/-", stocked: true, name: "Peas"}
    ];
    return(
        <div>
            <FilterableProductTable products={products}/>
        </div>
    );
}
export default Day13;