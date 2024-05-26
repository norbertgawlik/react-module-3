import { themes } from "../data/theme";

export type Theme = {
    name : string,
    page : string,
    desc : string,
    size : number,
    style : {
        main : string,
        second : string,
        font : string
    }
};

export type ThemeContextType = {
    theme : Theme,
    switchTheme : (name : keyof typeof themes) => void;
};