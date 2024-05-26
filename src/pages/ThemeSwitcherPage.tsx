import { ThemeContent } from "../components/Theme/ThemeContent";
import { ThemeContextProvider } from "../components/Theme/ThemeContext";
import { ThemeSwitcher } from "../components/Theme/ThemeSwitcher";

export const ThemeSwitcherPage = () => {
    return(
        <>
            <div>
                <ThemeContextProvider>
                    <ThemeSwitcher/>
                    <ThemeContent/>
                </ThemeContextProvider>
            </div>
        </>
    );
};