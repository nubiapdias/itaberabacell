import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+12</div>
        <span  style={{color: darkMode?'white':''}}>anos de</span>
        <span> Experiência </span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+2000</div>
        <span  style={{color: darkMode?'white':''}}> aparelhos </span>
        <span> Consertados </span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}> 90 </div>
        <span  style={{color: darkMode?'white':''}}> dias de</span>
        <span>Garantia</span>
      </div>
    </div>
  );
};

export default Experience;
