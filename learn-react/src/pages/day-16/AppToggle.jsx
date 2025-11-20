import UseToggle from "./UseToggle";

function AppToggle(){
    const [isOpen, toggleOpen] = UseToggle(false);

    return(
        <div>
            <h1>{isOpen? "Open": "Closed"}</h1>
            <button onClick={toggleOpen}>Toggle</button>
        </div>
    );
}

export default AppToggle;