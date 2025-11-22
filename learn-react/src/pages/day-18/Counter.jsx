import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {count: state.count++};
        case "decrement":
            return {count: state.count--};
        case "reset":
            return {count: 0};
    }
}

const InitialState = {
    count: 0
};

function Counter(){
    const [state, dispatch] = useReducer(reducer,InitialState);

    return(
        <div style={{backgroundColor:"pink", textAlign:"center"}}>
            <h1>Counter</h1>
            <h2>Count: {state.count}</h2>

            <button
            onClick={()=> dispatch({type:"increment"})}
            >Increment</button>
            <button
            onClick={()=>dispatch({type:"reset"})}
            >Reset</button>
            <button
            onClick={()=>dispatch({type:"decrement"})}
            >Decrement</button>
        </div>
    );
}
export default Counter;