import { User } from "./User";

export type UserState = User[];

export enum Action{
    ADD = 'add',
    REMOVE = 'remove',
    EDIT = 'edit'
};

export type ActionType = {
    type : Action,
    payload : User;
};