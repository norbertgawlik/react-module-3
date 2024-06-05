import { User } from "../../types/User";

type UserState = User[];

export enum ActionType{
    ADD = 'add',
    REMOVE = 'remove',
    EDIT = 'edit'
};

type Action = {
    type : ActionType,
    payload : User;
};

export const userReducer = (state: UserState, action: Action) : UserState => {
    switch(action.type){
        case ActionType.ADD : 
            return [...state,action.payload];
        case ActionType.REMOVE : 
            return state.filter(user => user !== action.payload);
        case ActionType.EDIT : 
            return state.map(user => user.id === action.payload.id ? action.payload : user);
        default:
            return state;
    }
};