import { NavLink } from "react-router-dom"
import { routes } from "../../routes";
type Props = {
    to : string,
    children : string
};

const WaNavLink = ({to,children} : Props) => {
    return(
        <NavLink
            to={to}
            className={({isActive,isPending}) => 
                isActive ? "text-red-500" : isPending ? "pending" : ""
            }
        >
            {children}
        </NavLink>
        
    )
}
export const Menu = () => {
    return(
        <>
            <div>
                <nav>
                    <ul className="flex justify-center">
                        <li className="p-2"><WaNavLink to={routes.HOME.path}>Home</WaNavLink></li>
                        <li className="p-2"><WaNavLink to={routes.SORTDATA.path}>SortData</WaNavLink></li>
                        <li className="p-2"><WaNavLink to={routes.THEMESWITCHER.path}>ThemeSwitcher</WaNavLink></li>
                        <li className="p-2"><WaNavLink to={routes.USERS.path}>Users</WaNavLink></li>
                        <li className="p-2"><WaNavLink to={routes.USERSREDUX.path}>UsersRedux</WaNavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}