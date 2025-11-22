import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {...state , age: state.age+1};
        
        case "change_name":
            return {...state, name: action.nextName};
        
        default:
            throw new Error("Unknown action type: "+action.type);
    }
}

const initialState = {
    name: "Nusratul",
    age: 21
};

function UseReducerApp(){
    const [state, dispatch] = useReducer(reducer,initialState);

    return(
        <div>
            <h2>Name: {state.name}</h2>
            <h2>Age: {state.age}</h2>

            <button
            onClick={()=>dispatch({type: "increment"})}
            >
                Increase Age
            </button>

            <input
            type="text" 
            placeholder="Change Name"
            onChange={(e)=>
                dispatch({
                    type: "change_name",
                    nextName: e.target.value
                })
            }
            />
        </div>
    );
}

export default UseReducerApp;