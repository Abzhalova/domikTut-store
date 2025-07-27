import React from "react";
import "./FAQ.scss";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      title: "Как происходит бронирование?",
      content:
        "Вы выбираете подходящий дом, мы подтверждаем наличие и фиксируем за вами даты после внесения предоплаты.",
    },
    {
      title: "Какая сумма предоплаты нужна?",
      content:
        "Стандарт предоплаты — 50% от суммы аренды. Если сумма большая, возможно уменьшение предоплаты до 30%.",
    },
    {
      title: "Можно ли разбить предоплату на несколько частей?",
      content:
        "Да, по предварительной договоренности мы можем предложить рассрочку на 2-3 части.",
    },
    {
      title: "Как работаете с юр. лицами?",
      content:
        "Мы предоставляем все необходимые документы для бухгалтерии и можем выставить счёт на оплату.",
    },
    {
      title: "Можно ли приехать на просмотр?",
      content:
        "Да, просмотр возможен по предварительной договоренности в удобное для вас время.",
    },
    {
      title:
        "Какое время заезда и выезда в дом и есть ли возможность сдвинуть заезд или выезд?",
      content:
        "Стандартное время заезда с 14:00, выезд до 12:00. При наличии свободных дат возможен гибкий график.",
    },
    {
      title: "Зачем нужен залог?",
      content:
        "Залог берётся для компенсации возможного ущерба. Он возвращается в течение 24 часов после выезда.",
    },
    {
      title: "Сколько стоят Ваши услуги?",
      content:
        "Наши услуги входят в стоимость аренды. Дополнительных комиссий нет.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq">
      <div className="container">
        <h1>Частые вопросы</h1>
        <div className="faq">
          {faqData.map((item, index) => (
            <div className="accordion__item" key={index}>
              <div
                className="accordion__header"
                onClick={() => toggleItem(index)}
              >
                <h3>{item.title}</h3>
                <span className="accordion__icon">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              <div
                className={`accordion__body ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
