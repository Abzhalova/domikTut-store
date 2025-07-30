import React, { useState } from "react";
import "./Authentication.scss";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../../../context/AuthContext";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const { register, singIn, signInWithGoogle } = useAuth(authContext);

  const resetState = () => {
    setEmail("");
    setPassword("");
    nav("/");
  };

  const handleRegister = async () => {
    await register(email, password);
    resetState();
  };

  const handleSingIn = async () => {
    await singIn(email, password);
    resetState();
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Добро пожаловать</h2>
        <div className="auth__form">
          <input
            type="email"
            placeholder="Email"
            className="auth__input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="auth__input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="auth__btn auth__btn--login" onClick={handleSingIn}>
            Войти
          </button>
          <button
            className="auth__btn auth__btn--register"
            onClick={handleRegister}
          >
            Регистрация
          </button>
          <button
            className="auth__btn auth__btn--google"
            onClick={() => signInWithGoogle()}
          >
            <FcGoogle size={20} />
            <span>Войти через Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
