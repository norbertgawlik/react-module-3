import { Provider } from "react-redux";
import { UsersList } from "../features/Users/UsersList";
import { store } from "../store";

export const UsersReduxPage = () => {
    return(
        <>
            <Provider store={store}>
                <UsersList/>
            </Provider>
        </>
    );
};