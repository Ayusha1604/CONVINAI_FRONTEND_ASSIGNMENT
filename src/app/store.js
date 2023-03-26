import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../features/userList/userListSlice";
import userCardReducer from "../features/userList/userCardSlice";

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    userCard: userCardReducer
  }
});
