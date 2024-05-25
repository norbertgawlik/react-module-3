import { users } from "../data/users";
import { useSortData } from "../hooks/useSortData";
import { SortOrder } from "../types/User";
import { Text } from "../ui";

export const SortDataPage = () => {
    const sortedList = useSortData(users,'age',SortOrder.ASC);
    return(
        <>
            <div>
                <Text>Users</Text>
                <ul>
                    {sortedList.map((user)=>{
                        return(
                            <li key={user.id}>{user.nickname} ({user.age})</li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};