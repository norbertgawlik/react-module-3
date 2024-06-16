import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { UsersPage, UsersReduxPage, ThemeSwitcherPage, SortDataPage, HomePage} from "./pages/index";

export const routes = {
    HOME : {
        path : '/',
    },
    SORTDATA : {
        path : '/sortdata'
    },
    THEMESWITCHER : {
        path : '/themeswitcher'
    },
    USERS : {
        path : '/users'
    },
    USERSREDUX : {
        path : '/usersredux'
    }
};

export const router = createBrowserRouter([{
    path : routes.HOME.path,
    element : <Layout/>,
    children : [
        {
            path : routes.HOME.path,
            element : <HomePage/>
        },
        {
            path : routes.SORTDATA.path,
            element : <SortDataPage/>
        },
        {
            path : routes.THEMESWITCHER.path,
            element : <ThemeSwitcherPage/>
        },
        {
            path : routes.USERS.path,
            element : <UsersPage/>
        },
        {
            path : routes.USERSREDUX.path,
            element : <UsersReduxPage/>
        }
    ]
}]);