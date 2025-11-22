import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <button onClick={toggleTheme}
        style={{background: theme=="light"?"#fff":"#222",
            color: theme === "light" ? "#000" : "#fff",
            padding:"10px 20px"
        }}
        >
            Toggle Theme ({theme})
        </button>
    );
}

export default ThemeButton;