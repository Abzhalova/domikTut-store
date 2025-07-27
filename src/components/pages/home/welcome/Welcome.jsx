import React from "react";
import "./Welcome.scss";
import bgHome from "../../../../assets/images/home-bg.png";
import Slider from "react-slick";
import { LiaYoutube } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoVk } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import welcomeImg1 from "../../../../assets/images/welcome1.svg";
import welcomeImg2 from "../../../../assets/images/welcome2.svg";
import welcomeImg3 from "../../../../assets/images/welcome3.svg";
import { useState } from "react";

const Welcome = () => {
  const [priceRange, setPriceRange] = useState([13000, 150000]);

  const handleRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    setPriceRange(newRange);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const houseCategory = [
    {
      id: 1,
      image: welcomeImg1,
      title: "С бассейном",
    },
    {
      id: 2,
      image: welcomeImg2,
      title: "Семейные",
    },
    {
      id: 3,
      image: welcomeImg3,
      title: "Хиты продаж",
    },
  ];

  return (
    <div
      id="welcome"
      style={{
        background: `url("${bgHome}") no-repeat bottom/cover`,
      }}
    >
      <div className="container">
        <div className="welcome">
          <div className="welcome--left">
            <h1>
              Аренда коттеджей <br /> и домов в Казани
            </h1>
            <p>
              Найдите идеальный вариант сами <br /> или предоставьте это нам
            </p>
            <div className="welcome--left__category">
              <Slider {...settings}>
                {houseCategory.map((el) => (
                  <div className="welcome--left__category--card" key={el.id}>
                    <img src={el.image} alt="img" />
                    <h4>{el.title}</h4>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="welcome--left__icons">
              <a href="#">
                <LiaYoutube />
              </a>
              <a href="#">
                <IoLogoInstagram />
              </a>
              <a href="#">
                <BiLogoVk />
              </a>
              <a href="#">
                <MdWhatsapp />
              </a>
              <a href="#">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
          <div className="booking-filter">
            <div className="booking-filter__field">
              <label>Въезд</label>
              <input type="text" placeholder="От" />
            </div>
            <div className="booking-filter__field">
              <label>Отъезд</label>
              <input type="text" placeholder="До" />
            </div>

            <div className="booking-filter__field">
              <label>Количество человек</label>
              <input type="number" min="1" placeholder="12" />
            </div>

            <div className="booking-filter__range">
              <input
                type="range"
                min="13000"
                max="150000"
                value={priceRange[0]}
                onChange={(e) => handleRangeChange(0, e.target.value)}
              />
              <input
                type="range"
                min="13000"
                max="150000"
                value={priceRange[1]}
                onChange={(e) => handleRangeChange(1, e.target.value)}
              />
              <div className="booking-filter__range-labels">
                <span>{priceRange[0].toLocaleString()} ₽</span>
                <span>{priceRange[1].toLocaleString()} ₽</span>
              </div>
            </div>

            <button className="booking-filter__submit">Найти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
