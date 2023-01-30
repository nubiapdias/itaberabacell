import React, { useContext } from "react";
import "./Works.css";
import moto from "../../img/moto.png"
import dell from "../../img/dell.png"
import apple from "../../img/apple.png";
import mi from "../../img/mi.png";
import samsung from "../../img/samsung.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Trabalhamos com qualquuer
          </span>
          <span> Aparelho de qualquer marca</span>
          <spane>
            Realizamos a manutenção de aparelhos de qualquer marca,
            <br />
            desde Notebooks, até celulares e tablets.
            <br />
            Nós trabalhamos com peças originais e com garantia.
            <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contato</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ffe6ab93" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={moto} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={dell} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={apple} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={mi} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={samsung} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
