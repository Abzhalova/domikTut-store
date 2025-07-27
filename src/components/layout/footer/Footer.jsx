import React from "react";
import "./Footer.scss";
import footerImg from "../../../assets/images/logo1.svg";
import { LiaYoutube } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoVk } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <img src={footerImg} alt="img" />
          <a href="#">8 (843) 528-65-48</a>
          <div className="footer--icons">
            <a href="#">
              <LiaYoutube />
            </a>
            <a href="#">
              <IoLogoInstagram />
            </a>
            <a href="#">
              <BiLogoVk />
            </a>
            <a href="https://www.youtube.com/watch?v=Me5Uq_3ffEw&list=RDMe5Uq_3ffEw&start_radio=1" target="_blank~">
              <MdWhatsapp />
            </a>
            <a href="#">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
