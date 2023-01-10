import { createSlice } from "@reduxjs/toolkit";

const initAllUser = JSON.parse(localStorage.getItem('allUsers'));

const initialState = {
  users: initAllUser,
};

const TotaluserSlice = createSlice({
  name: "totalusers",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
       state.users = [...state.users, action.payload];
      localStorage.setItem("allUsers", JSON.stringify(state.users));
    },
  },
});

export const { addNewUser } = TotaluserSlice.actions;
export default TotaluserSlice.reducer;
