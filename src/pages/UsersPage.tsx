import { users } from "../data/users";
import { userReducer, ActionType } from "../components/Users/userReducer";
import { MouseEventHandler, useReducer, useState} from "react";
import { User } from "../types/User";
import { Button } from "../ui";
import { UserForm } from "../components/Users/UserForm";

const initialValue : User[] = users;

export const UsersPage = () => {
    const [state,dispatch] = useReducer(userReducer,initialValue);
    const [editingUserId,setEditingUserId] = useState<number | null>(null)

    const handleRemoveUser = (user : User) : MouseEventHandler<HTMLButtonElement> => {
        return () => dispatch({type: ActionType.REMOVE, payload: user});
    };
    const handleAddUser = (user: User) => {
        dispatch({ type: ActionType.ADD, payload: user });
        console.log(state);
    };
    
    const handleEditUser = (user: User) => {
        dispatch({type: ActionType.EDIT, payload: user});
        setEditingUserId(null);
    };
    
    const handleToggleEditUser = (id: number) => {
        setEditingUserId(prev => (prev===id ? null : id));
    };

    return(
        <>
            <UserForm onSubmit={handleAddUser}/>
            -------------------------------------------------------
            <h4>Users List</h4>
            <ul>
                {state.map(user=>(
                    <li key={user.id}>
                        {user.nickname} ({user.age})
                        <Button label="(edit)" onClick={()=>handleToggleEditUser(user.id)}/>
                        {editingUserId === user.id && (
                            <UserForm initData={user} onSubmit={handleEditUser}/>
                        )}
                        <Button label="X" onClick={handleRemoveUser(user)}/>
                    </li>
                ))}
            </ul>
        </>
    );
};