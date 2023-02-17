import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: "All",
    search: "",
  },
  reducers: {
    chengeGlobslClass: (state, data) => {
      state.value = data.payload;
    },
    searchUsers: (state, data) => {
      state.search = data.payload;
    },
  },
});

export const { chengeGlobslClass, searchUsers } = usersSlice.actions;
export const selectUsers = (state: any) => state.users.value;
export const selectSearchUsers = (state: any) => state.users.search;
export default usersSlice.reducer;
