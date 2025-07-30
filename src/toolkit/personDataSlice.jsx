import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userDataSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { getUser } = userDataSlice.actions;
export default userDataSlice.reducer;
