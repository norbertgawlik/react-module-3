import { ChangeEventHandler } from "react";
import { themes } from "../../data/theme";
import { Text } from "../../ui";
import { useThemeContext } from "./ThemeContext";

export const ThemeSwitcher = () => {
    const { switchTheme } = useThemeContext();

    const handleChange : ChangeEventHandler<HTMLSelectElement> = (e) => {
        const selected = e.target.value as keyof typeof themes;
        switchTheme(selected);
    };
    
    return(
        <div>
            <Text>Select Theme</Text>
            <select className="border" onChange={handleChange}>
                {Object.keys(themes).map((e,i)=>(
                    <option key={i} value={e}>
                        {themes[e as keyof typeof themes].name}
                    </option>
                ))};
            </select>
        </div>
    );
};