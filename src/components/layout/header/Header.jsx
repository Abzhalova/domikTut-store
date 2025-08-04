import React, { useEffect, useState, useMemo } from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../toolkit/personDataSlice";
import { auth } from "../../../fireBase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../../../context/AuthContext";
import { getAllProduct } from "../../../toolkit/productAllSlice";
import axios from "axios";
import ProductCard from "../../ui/productCard/ProductCard";

const Header = () => {
  const dispatch = useDispatch();
  const { logOut } = useAuth();
  const nav = useNavigate();

  const { user } = useSelector((state) => state.userReducer);
  const products = useSelector((state) => state.domikReducer.products || []);

  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      if (data) {
        dispatch(
          getUser({
            uid: data.uid,
            email: data.email,
            displayName: data.displayName,
            photoURL: data.photoURL,
            providerData: data.providerData,
            emailVerified: data.emailVerified,
          })
        );
      } else {
        dispatch(getUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://api-crud.elcho.dev/api/v1/55ec7-d2f4e-c6620/dom"
        );
        dispatch(getAllProduct(res.data.data));
      } catch (error) {
        console.error("Ошибка при загрузке продуктов:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const filtered = useMemo(() => {
    return query.trim() === ""
      ? []
      : products.filter((el) =>
          el.title.toLowerCase().includes(query.toLowerCase())
        );
  }, [query, products]);

  useEffect(() => {
    if (query.trim() === "") {
      setShowResults(false);
    } else {
      setShowResults(true);
    }
  }, [query]);

  const handleSelect = (id) => {
    setQuery("");
    setShowResults(false);
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="header--logo">
              <img src={logo} alt="logo" onClick={() => nav("/")} />
              <button>Каталог</button>
            </div>

            <div className="header--nav">
              <NavLink to="/">Частые вопросы</NavLink>
              <NavLink to="/">Сотрудничество</NavLink>
            </div>

            <div className="header--contact">
              <a onClick={() => nav("/auth")}>
                <CiUser />
              </a>
              <a onClick={() => nav("/admin")}>
                <MdOutlineAdminPanelSettings />
              </a>
              <a onClick={() => nav("/favorite")}>
                <CiHeart />
              </a>

              <div className="header--search" style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Введите название"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button type="button">
                  <GoSearch />
                </button>

                {query.trim() && (
                  <ul
                    className="search-suggestions"
                    style={{
                      position: "absolute",
                      top: "40px",
                      background: "#fff",
                      width: "100%",
                      zIndex: 10,
                      border: "1px solid #ccc",
                    }}
                  >
                    {filtered.length > 0 ? (
                      filtered.slice(0, 5).map((item) => (
                        <li
                          key={item._id}
                          onClick={() => handleSelect(item._id)}
                          style={{ cursor: "pointer", padding: "5px 10px" }}
                        >
                          {item.title}
                        </li>
                      ))
                    ) : (
                      <li style={{ padding: "5px 10px" }}>Ничего не найдено</li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {user?.providerData?.length > 0 &&
            user.providerData.map((el, idx) => (
              <div className="person" key={idx}>
                <img
                  src={
                    el.photoURL
                      ? el.photoURL
                      : "https://cdn-icons-png.flaticon.com/512/7381/7381253.png"
                  }
                  alt="user avatar"
                />
                <h3>{el.displayName?.split(" ")[0] || "user"}</h3>
                <button onClick={() => logOut()}>х</button>
              </div>
            ))}
        </div>
      </header>

      {showResults && (
        <div className="container">
          <div className="search-results" style={{ paddingTop: "20px" }}>
            {filtered.length > 0 ? (
              <div className="search-grid">
                {filtered.map((item) => (
                  <ProductCard key={item._id} el={item} />
                ))}
              </div>
            ) : (
              <p>Ничего не найдено.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
