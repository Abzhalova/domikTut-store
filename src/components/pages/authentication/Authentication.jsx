import React from "react";
import "./Authentication.scss";
import { FcGoogle } from "react-icons/fc";


const Authentication = () => {
  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Добро пожаловать</h2>
        <div className="auth__form">
          <input type="email" placeholder="Email" className="auth__input" />
          <input
            type="password"
            placeholder="Password"
            className="auth__input"
          />
          <button className="auth__btn auth__btn--login">Войти</button>
          <button className="auth__btn auth__btn--register">Регистрация</button>
          <button className="auth__btn auth__btn--google">
            <FcGoogle size={20} />
            <span>Войти через Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
