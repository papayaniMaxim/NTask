import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "./user";

export interface UsersState {
    users: User[];
}
const initialState: UsersState = {
  users: [new User("Никита", "09.02.2004"), new User("Владислав","17.08.2005")],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(state: UsersState, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    updateUser(state: UsersState, action: PayloadAction<User>) {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
          user.dateOfBirth = action.payload.dateOfBirth;
        }
        return user;
      });
    },
    deleteUser(state: UsersState, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id != action.payload);
    },
  },
});

export const { createUser, updateUser, deleteUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
