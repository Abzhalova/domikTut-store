import React, { useEffect } from "react";
import "./PopularProduct.scss";
import ProductCard from "../../../ui/productCard/ProductCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../../toolkit/productAllSlice";

const PopularProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s.domikReducer);

  async function getProduct() {
    let res = await axios.get(
      `https://api-crud.elcho.dev/api/v1/55ec7-d2f4e-c6620/dom`
    );
    let { data } = res.data;
    dispatch(getAllProduct(data));
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div id="popular">
      <div className="container">
        <h1>Популярное в каталоге</h1>
        <div className="popular">
          {products.map((el) => (
            <ProductCard el={el} key={el._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
