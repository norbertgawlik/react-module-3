import { ReactNode, createContext, useContext, useState } from "react";
import { themes } from "../../data/theme";
import { type Theme, type ThemeContextType } from "../../types/Theme";

const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = "ThemeContext";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if(context !== null){
        return context;
    };
    throw new Error("Component should be within Provider!");
};

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(themes.cocacola);

    const switchTheme = (name : keyof typeof themes) => {
        setTheme(themes[name]);
    };

    return { theme, switchTheme };
};

export const ThemeContextProvider = ({children} : {children : ReactNode}) => {
    const { theme, switchTheme } = useTheme();
    return(
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};