import { UserReducer } from "../components/Users/UserReducer";
import { MouseEventHandler, useReducer, useState} from "react";
import { Button } from "../ui";
import { UserForm } from "../components/Users/UserForm";
import { users } from "../data/users";
import { type User } from "../types/User";
import { Action } from "../types/Action";

const initialValue : User[] = users;

export const UsersPage = () => {
    const [state,dispatch] = useReducer(UserReducer,initialValue);
    const [editingUserId,setEditingUserId] = useState<number | null>(null)

    const handleRemoveUser = (user : User) : MouseEventHandler<HTMLButtonElement> => {
        return () => dispatch({type: Action.REMOVE, payload: user});
    };
    const handleAddUser = (user: User) => {
        dispatch({ type: Action.ADD, payload: user });
    };
    
    const handleEditUser = (user: User) => {
        dispatch({type: Action.EDIT, payload: user});
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