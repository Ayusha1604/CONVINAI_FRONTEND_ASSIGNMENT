import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  count: 0,
  status: false,
};

export const incrementAsync = createAsyncThunk(
  'userList/incrementAsync',
  async () => {
    let userList = [];
    
    const pageCount = await fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      return data.total_pages;
    });

    for (let i = 1; i <= pageCount; i++) {
      const userItem = await fetch(`https://reqres.in/api/users?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          return data.data;
        });
      
      userList.push(...userItem);
    }

    console.log(userList);
    return userList;
  }
);

export const userListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users.push(...action.payload)
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((_, index) => {
        return index !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = false;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.users.push(...action.payload);
        state.count = state.users.length;
        state.status = true;
      });
  },
});

export const { addUsers, removeUser } = userListSlice.actions;

export const selectUserList = (state) => state.userList.users;
export const selectUserStatus = (state) => state.userList.status;
export const selectUserCount = (state) => state.userList.count;

export default userListSlice.reducer;
