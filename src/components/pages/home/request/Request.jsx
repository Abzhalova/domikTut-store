import React from "react";
import "./Request.scss";
import requestImg from "../../../../assets/images/request.png";

const Request = () => {
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
          <button>Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Request;
