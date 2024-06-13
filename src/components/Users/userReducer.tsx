import { Action, type UserState, type ActionType} from "../../types/Action";

export const UserReducer = (state: UserState, action: ActionType) : UserState => {
    switch(action.type){
        case Action.ADD : 
            return [...state,action.payload];
        case Action.REMOVE : 
            return state.filter(user => user !== action.payload);
        case Action.EDIT : 
            return state.map(user => user.id === action.payload.id ? action.payload : user);
        default:
            return state;
    }
};