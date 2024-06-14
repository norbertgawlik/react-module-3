import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type User } from '../../types/User';
import { users } from '../../data/users';

export interface UserState {
  users : User[]
};

const initialState: UserState = {
  users: users
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    add: (state,action:PayloadAction<User>) => {
        state.users.push(action.payload)
    },
    remove: (state,action:PayloadAction<User>) => {
        state.users.filter(user=>user.id !== action.payload.id);
    }
  }
});

export const { add, remove } = usersSlice.actions;
export default usersSlice.reducer;