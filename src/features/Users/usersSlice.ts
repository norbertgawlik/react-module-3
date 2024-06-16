import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/User';
import { users } from '../../data/users';

export interface UsersState {
  users : User[]
};

const initialState: UsersState = {
  users: users
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    remove:  (state, action: PayloadAction<User>) => {
      state.users = state.users.filter(user=>user.id !== action.payload.id);
    },
    edit:  (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if(index != -1) state.users[index] = action.payload;
    }
  }
})

export const { add, remove, edit} = usersSlice.actions
export default usersSlice.reducer