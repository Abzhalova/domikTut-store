import { configureStore } from "@reduxjs/toolkit";
import domikSlice from "./productAllSlice";
import domikFavoriteSlice from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    domikReducer: domikSlice,
    favoriteReducer: domikFavoriteSlice,
  },
});
