import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import instagram from "../../img/instagram.png"

import whatsapp from "../../img/whatsapp.png";

import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>
        {" "}
        Acesse nosso Instragram para acompanhar nosso
      </span>
      <span>Trabalho</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={instagram} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={whatsapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instagram} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={whatsapp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
