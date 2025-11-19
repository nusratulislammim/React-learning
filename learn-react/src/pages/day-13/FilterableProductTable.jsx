import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({products}){
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return(
        <div style={{textAlign:"center", border:"solid gray"}}>
            <h1>Filterable Product Table</h1>
            <SearchBar
            filterText = {filterText} inStockOnly = {inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockChange={setInStockOnly}
            />
            <ProductTable
            filterText = {filterText} inStockOnly = {inStockOnly}
             products={products}/>
        </div>
    )
}

export default FilterableProductTable;