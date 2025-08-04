import React, { useState } from "react";
import "./Request.scss";
import requestImg from "../../../../assets/images/request.png";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const Request = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setShowMessage(true);
  };

  const resetState = () => {
    setName("");
    setNumber("");
    setMessage("");
    // nav("/");
  };
  const handleRegister = async () => {
    await register(name, number, message);
    resetState();
  };

  const toSend = () => {
    if (!name.trim() || !number.trim() || !message.trim()) {
      alert("Заполните пустые ячейки");
    } else if (name.length < 5 || number.length < 5 || message.length < 5) {
      alert("слово должно быть больше 5");
    } else {
      let my_id = `-1002674905046`;
      let token = `7888263100:AAEEtwev-LB79dzjqGEIsRX5Vrm_IC9hHFY`;
      let api_key = `https://api.telegram.org/bot${token}/sendMessage`;
      let newMessage = {
        chat_id: my_id,
        parse_mode: "HTML",
        text: `Message:
    Name: ${name}
    Number: ${number}
    Message: ${message}
    `,
      };
      axios.post(api_key, newMessage);
      setName("");
      setNumber("");
      setMessage("");
      setShowMessage(false);
    }
  };

  return (
    <div
      id="request"
      style={{
        background: `url("${requestImg}") no-repeat top/cover`,
      }}
    >
      <div className="container">
        <div className="request">
          <h1>Хотите сдать дом?</h1>
          <p>
            Оставьте заявку и мы свяжемся <br /> с вами для уточнения деталей
          </p>
          <button onClick={handleClick}>Оставить заявку</button>
          {showMessage && (
            <div className="request--list">
              <div className="request--list__block">
                <a onClick={() => setShowMessage(false)}>
                  <IoClose />
                </a>
                <h2>Оставить заявку</h2>
                <input
                  type="text"
                  placeholder="Имя"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  defaultValue={"+996"}
                  maxLength={13}
                  type="text"
                  placeholder="Номер телефона"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <textarea
                  name="message"
                  placeholder="Введите сообщение..."
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={() => toSend()}>Отправить</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Request;
