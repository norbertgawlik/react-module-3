import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { User } from "../../types/User";
import { Button, Text } from "../../ui";
import { UsersForm } from "./UsersForm";
import { add, remove, edit} from "./UsersSlice";

export const UsersList = () => {
    const users = useAppSelector(state => state.users.users);
    const [editingUser,setEditingUser] = useState<User | null>(null);
    const dispatch = useAppDispatch();

    const handleRemoveUser = (user : User) => {
        dispatch(remove(user));
    };

    const handleAddUser = (user: Omit<User, 'id'>) => {
        const nextId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
        dispatch(add({ id: nextId, ...user }));
    };

    const handleEditUser = (user : User) => {
        dispatch(edit(user));
        setEditingUser(null);
    };

    const handleChangeEditUserIndex = (user : User) => {
        setEditingUser(user === editingUser ? null : user);
    };
    
    return(
        <>
            <Text>Users List</Text>
            <ul>
                {users.map((e,i)=>(
                    <li key={i}>
                        <div>{e.id}. {e.nickname} ({e.age}) </div>
                        <div>
                            <Button label="DELETE" onClick={()=>handleRemoveUser(e)}/>
                            <Button label="EDIT" onClick={()=>handleChangeEditUserIndex(e)}/>
                            {editingUser === e && 
                                <UsersForm onSubmit={handleEditUser} initData={e}/>
                            }
                        </div>
                    </li>
                ))}
            </ul>
            
            <Text className="mt-10">Add new user: </Text>
            <UsersForm onSubmit={handleAddUser}/>
        </>
    );
};