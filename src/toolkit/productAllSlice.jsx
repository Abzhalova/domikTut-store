import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const domikSlice = createSlice({
  name: "DOMIK",
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const { getAllProduct } = domikSlice.actions;
export default domikSlice.reducer;
