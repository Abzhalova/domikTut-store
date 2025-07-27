import React from "react";
import Header from "./components/layout/header/Header";
import HomePage from "./components/pages/home/HomePage";
import Footer from "./components/layout/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Authentication from "./components/pages/authentication/Authentication";
import Favorite from "./components/pages/favorite/Favorite";
import Admin from "./components/pages/admin/Admin";

const App = () => {
  const mainRoutes = [
    {
      id: 1,
      element: <HomePage />,
      path: "/",
    },
    {
      id: 2,
      element: <Authentication />,
      path: "/auth",
    },
    {
      id: 3,
      element: <Favorite />,
      path: "/favorite",
    },
    {
      id: 4,
      element: <Admin />,
      path: "/admin",
    },
    {
      id: 5,
      element: <Favorite />,
      path: "/",
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {mainRoutes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
