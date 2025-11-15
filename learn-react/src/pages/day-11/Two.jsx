function ChildA ({text, setText}){
    return(
        <div>
            <h3>CHild A</h3>
            <input
            type="text" value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Type something.."
            />
        </div>
    );
}
export default ChildA;