import ThemeButton from "./ThemeButton";
import ThemeProvider from "./ThemeProvider";

function Day17 (){
    return(
        <div>
            <h1>Day-17: Context </h1>
            <h2>task: Create a theme context (light/dark mode) </h2>
            <ThemeProvider>
                <ThemeButton/>
            </ThemeProvider>
        </div>
    );
}
export default Day17;