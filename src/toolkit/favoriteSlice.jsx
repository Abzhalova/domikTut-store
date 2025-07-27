import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: JSON.parse(localStorage.getItem('favorite')) || [],
};

export const domikFavoriteSlice = createSlice({
  name: "FAVORITE",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      let findFav = state.favorite.find((el) => el._id === action.payload._id);
      if (findFav) {
        let delFav = state.favorite.filter(
          (el) => el._id !== action.payload._id
        );
        localStorage.setItem("favorite", JSON.stringify(delFav));
        return { ...state, favorite: delFav };
      } else {
        let newFavorite;
        if (Array.isArray(action.payload)) {
          newFavorite = [...action.payload];
        } else {
          newFavorite = [...state.favorite, action.payload];
        }
        localStorage.setItem("favorite", JSON.stringify(newFavorite));
        return { ...state, favorite: newFavorite };
      }
    },
  },
});

export const { addToFavorite } = domikFavoriteSlice.actions;
export default domikFavoriteSlice.reducer;
