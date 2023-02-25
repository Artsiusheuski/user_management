import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  value: string;
  search: string;
}

const initialState: UsersState = {
  value: "All",
  search: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeGlobslClass: (state, data) => {
      state.value = data.payload;
    },
    searchUsers: (state, action: PayloadAction<any>) => {
      state.search = action.payload;
    },
  },
});

export const { changeGlobslClass, searchUsers } = usersSlice.actions;
export const selectUsers = (state: any) => state.users.value;
export const selectSearchUsers = (state: any | undefined) => state.users.search;
export default usersSlice.reducer;
