import React from "react";
import "./Favorite.scss";
import { useDispatch, useSelector } from "react-redux";
// import FavoriteCard from "../../ui/favoriteCard/favoriteCard";
import FavoriteCard from "../../ui/favoriteCard/FavoriteCard";

const Favorite = () => {
  const favorite = useSelector((s) => s.favoriteReducer.favorite);

  const dispatch = useDispatch();

  return (
    <div id="favorite">
      <div className="container">
        <h1>Избранное</h1>
        <div className="favorite">
          {favorite && favorite.length > 0
            ? favorite.map((el) => <FavoriteCard el={el} key={el._id} />)
            : "Нет избранных товаров"}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
