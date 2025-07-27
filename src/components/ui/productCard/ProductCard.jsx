import React from "react";
import "./ProductCard.scss";
import {
  FaBed,
  FaTableTennis,
  FaSpa,
  FaSwimmingPool,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../../../toolkit/favoriteSlice";

const ProductCard = ({ el }) => {
  const favorite = useSelector((state) => state.favoriteReducer.favorite);

  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    dispatch(addToFavorite(el));
  };
  let someFav = favorite?.some((item) => item._id === el._id);
  return (
    <div className="card">
      <div className="card__image">
        <img src={el.image} alt="Домик" />
        <div className="card__capacity" onClick={() => addToFavorite(el)}>
          <FaUser /> до {el.people}
        </div>
        <button className="card__like" onClick={handleFavoriteClick}>
          <span>{!someFav ? "♡" : "❤️"}</span>
        </button>
      </div>

      <div className="card__content">
        <h2 className="card__title">{el.title}</h2>

        <ul className="card__features">
          <li>
            <FaBed /> 5 спальных мест
          </li>
          <li>
            <FaTableTennis /> Настольный теннис
          </li>
          <li>
            <FaSpa /> Баня
          </li>
          <li>
            <FaSwimmingPool /> Бассейн
          </li>
        </ul>

        <div className="card__footer">
          <span className="card__price">
            от <strong>{el.price}₽</strong> / сутки
          </span>
          <a href="#" className="card__link">
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
