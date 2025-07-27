import React from "react";
import "./About.scss";
import { GoChecklist } from "react-icons/go";
import { PiHeadset } from "react-icons/pi";
import { RiUserHeartLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import aboutImg from "../../../../assets/images/about.png";

const About = () => {
  const aboutCards = [
    {
      id: 1,
      icon: <GoChecklist />,
      title: "Работаем с юридическими  и физическими лицами",
    },
    {
      id: 2,
      icon: <PiHeadset />,
      title:
        "Бесплатный подбор, честные консультации и открытость к сотрудничеству",
    },
    {
      id: 3,
      icon: <RiUserHeartLine />,
      title:
        "Работаем с 2014 года. Консультируем 30-80 человек в сутки, заселяем от 3 до 5 компаний в день. Помогли более 21 000 клиентам",
    },
    {
      id: 4,
      icon: <FaRegStar />,
      title: "Средний рейтинг компании 4,5 из 5 (Avito, Google, Отзовик)",
    },
  ];
  return (
    <div
      id="about"
      style={{
        background: `url("${aboutImg}") no-repeat center/cover`,
      }}
    >
      <div className="container">
        <h1>О нас</h1>
        <div className="about">
          {aboutCards.map((el) => (
            <div className="about--card" key={el.id}>
              <a href="#">{el.icon}</a>
              <p>{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
