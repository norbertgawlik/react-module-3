import { useThemeContext } from "./ThemeContext";

export const ThemeContent = () => {
    const { theme } = useThemeContext();
    const styles = {
        backgroundColor : theme.style.main,
        color: theme.style.font,
        second : {
            color: theme.style.second
        }
    }
    return(
        <div style={styles} className="my-3">
            <div className="flex">
                <div className="logo flex">
                    <a className="flex items-center justify-center" href={`${theme.page}`}><img width="75" height="75"src={`https://logo.clearbit.com/${theme.page}`}/></a>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <p><strong>Name: </strong> {theme.name}</p>
                    <p><strong>Page: </strong> <a href={`theme.page`}>{theme.page}</a></p>
                    <p><strong>Company size: </strong> {theme.size}</p>
                </div>
            </div>
            <p style={styles.second} className="p-3 text-sm">Desc: {theme.desc}</p>
        </div>
    );
};
<dfn></dfn>