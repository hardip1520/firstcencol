import { createSlice } from "@reduxjs/toolkit";


const SingleuserSlice = createSlice({
  name: "singleuser",
  initialState: { userinfo: {  } },
  reducers: {
    loginuser: (state, action) => {
     state.userinfo= action.payload;
     localStorage.setItem("userinfo",JSON.stringify(state.userinfo));
    },
  },
});

export const { loginuser } = SingleuserSlice.actions;
export default SingleuserSlice.reducer;
