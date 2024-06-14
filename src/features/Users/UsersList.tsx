import { users } from "../../data/users"
export const UsersList = () => {
    return(
        <>
            <ul>
                {users.map((e,i)=>(
                    <li key={i}>{e.id}. {e.nickname} ({e.age})</li>
                ))}
            </ul>
        </>
    )
}