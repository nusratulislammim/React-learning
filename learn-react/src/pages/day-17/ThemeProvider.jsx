import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeProvider({children}){
    const [theme, setTheme] = useState("light");

    const toggleTheme =()=>{
        setTheme((prev)=>(prev == "light"?"dark":"light"));
    };

    const pageStyle = {
        background: theme === "light"? "#ffffff":"#222222",
        color: theme === "light"?"#000000":"#ffffff",
        minHeight: "100vh",
        padding : "20px",
        transition : "0.3s ease"
    }

    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            <div style={pageStyle}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;