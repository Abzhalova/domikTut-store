import React from "react";
import "./Admin.scss";
import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    price: "",
    people: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      !formData.image.trim() ||
      !formData.title.trim() ||
      !formData.price.trim() ||
      !formData.people.trim()
    ) {
      alert(404);
    } else {
      axios.post(
        `https://api-crud.elcho.dev/api/v1/a3a8c-0bb50-06113/domik`,
        formData
      );
      setFormData({
        image: "",
        title: "",
        price: "",
        people: "",
      });
    }
  };

  return (
    <div className="add-product">
      <div className="add-product__container">
        <h2 className="add-product__title">Добавить продукт</h2>
        <div className="add-product__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="image"
            placeholder="Изображение"
            className="add-product__input"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Название продукта"
            className="add-product__input"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Цена"
            className="add-product__input"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="people"
            placeholder="Количество людей"
            className="add-product__input"
            value={formData.people}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="add-product__btn"
            onClick={handleSubmit}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
