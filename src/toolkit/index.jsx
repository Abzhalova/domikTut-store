import { configureStore } from "@reduxjs/toolkit";
import domikSlice from "./productAllSlice";
import domikFavoriteSlice from "./favoriteSlice";
import  userDataSlice  from "./personDataSlice";

export const store = configureStore({
  reducer: {
    domikReducer: domikSlice,
    favoriteReducer: domikFavoriteSlice,
    userReducer: userDataSlice
  },
});
