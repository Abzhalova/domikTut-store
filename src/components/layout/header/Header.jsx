import React from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Header = () => {
  const nav = useNavigate();
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img src={logo} alt="img" onClick={() => nav("/")} />
            <button>Каталог</button>
          </div>
          <div className="header--nav">
            <NavLink to={"/"}>Частые вопросы</NavLink>
            <NavLink to={"/"}>Сотрудничество</NavLink>
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
            <a href="#">
              <GoSearch />
              Поиск по названию
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
