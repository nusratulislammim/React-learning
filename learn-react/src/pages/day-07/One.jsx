import React, {useState} from "react";

function LoginLogout(){
    const [isLoggedIn, setLog] = useState(false);

    function handleLogin(){
        setLog(!isLoggedIn);
    }

    return(
        <div style={{backgroundColor:"skyblue",textAlign:"center"}}>
            <h2>click to login/logout</h2>
            <p>{isLoggedIn? "You are logged in":"You are logged out"}</p>
            <button onClick={handleLogin}>{isLoggedIn? "Logout":"Login"}</button>
        </div>
    );
};

export default LoginLogout;