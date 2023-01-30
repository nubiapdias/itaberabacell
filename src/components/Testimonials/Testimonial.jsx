import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Derrubei um copo de água em meu notebook e experimentei o melhor atendimento da minha vida. Além de meu computador voltar melhor do que estava antes de estragar, o técnico me apresentou um orçamento justo.",
    },
    {
      img: profilePic2,
      review:
        "O único técnico que confio meu aparelho celular.",
    },
    {
      img: profilePic3,
      review:
        "Itaberaba Cell foi a única assistência técnica da região a resolver meu problema. Ótimo atendimento e prço justo",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clientes sempre são nossa </span>
        <span>Prioridade </span>
        <span>por aqui...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
