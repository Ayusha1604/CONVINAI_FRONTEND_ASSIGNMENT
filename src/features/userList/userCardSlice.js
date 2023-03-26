import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 	name: "",
  img: "",
  email: "",
};

export const userCardSlice = createSlice({
  name: "userCard",
  initialState,
  reducers: {
    changeInfo: (state, action) => {
      state.name = action.payload.name;
      state.img = action.payload.img;
      state.email = action.payload.email;
    },
  },
});

export const { changeInfo } = userCardSlice.actions;

export const selectCardName = (state) => state.userCard.name;
export const selectCardImg = (state) => state.userCard.img;
export const selectCardEmail = (state) => state.userCard.email;

export default userCardSlice.reducer;
