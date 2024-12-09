import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  },
  users: [], 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    addUser: (state) => {
      state.users.push(state.userInfo);
      state.userInfo = initialState.userInfo; // Clear form after adding
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.email === action.payload.email
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.email !== action.payload);
    },
  },
});

export const { setUserInfo, addUser, updateUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
