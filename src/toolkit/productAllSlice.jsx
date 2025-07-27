import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const domikSlice = createSlice({
  name: "DOMIK",
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const { getAllProduct } = domikSlice.actions;
export default domikSlice.reducer;
