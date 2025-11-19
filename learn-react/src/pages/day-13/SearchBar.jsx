
function SearchBar({filterText,inStockOnly,onFilterTextChange, onInStockChange}){
    return(
        <div>
            <form>
                <input type="text" value={filterText} placeholder="Search..."
                 onChange={e => onFilterTextChange(e.target.value)} /><br/>
                <label>
                    <input type="checkbox" checked = {inStockOnly}
                    onChange={e => onInStockChange(e.target.checked)}
                    />
                    {' '}
                    Only show products in stock
                </label>
            </form>

        </div>
    );
}
export default SearchBar;