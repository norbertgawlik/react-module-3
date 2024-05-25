import { useEffect, useState } from "react";
import { SortOrder, type User } from "../types/User";

export const useSortData = (data: User[], field: keyof User, order: SortOrder) => {
    const [sorted,setSorted] = useState<User[]>(data);

    useEffect(()=>{
        const sortData = () => {
            return [...data].sort((a,b)=>{
                if(a[field] < b[field]) return order === SortOrder.DESC ? 1 : -1;
                if(a[field] > b[field]) return order === SortOrder.DESC ? -1 : 1;
                return 0;
            });
        };
        setSorted(sortData);
    },[data,field,order]);
    
    return sorted;
};