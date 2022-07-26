import React from "react";
import "./nav.css";
import menuH from "../../img/menu.svg";

export default function Nav({
  color,
  fontColor,
  font,
  btnSpace,
  btnHover,
  navHeight,
  navShadow,
  fontSiz,
  navOrder
}) {
  const openBurger = () => {
    const nav = document.querySelector(".custom-nav");
    nav.classList.toggle("open");
  };

  return (
    <nav
      style={{
        background: `linear-gradient(220.55deg, ${color[1]} 0%, ${color[0]} 100%)`,
        color: fontColor,
        height: `${navHeight}px`,
        boxShadow: `0 0 29px #000000${navShadow}`,
      }}
      className={`custom-nav ${navOrder}`}
    >
      <h2 style={{ color: fontColor, fontFamily: font, fontSize: fontSiz }}>
        navCreator
        <span class="material-symbols-outlined" onClick={openBurger} style={{color: fontColor}}>
          menu
        </span>
      </h2>

      <div className="btn-container">
        <a
          className={`nav-btn ${btnHover}`}
          style={{
            color: fontColor,
            fontFamily: font,
            margin: `0 ${btnSpace}px`,
            fontSize: fontSiz * 0.57,
          }}
        >
          BUTTON
        </a>
        <a
          className={`nav-btn ${btnHover}`}
          style={{
            color: fontColor,
            fontFamily: font,
            margin: `0 ${btnSpace}px`,
            fontSize: fontSiz * 0.57,
          }}
        >
          BUTTON
        </a>
        <a
          className={`nav-btn ${btnHover}`}
          style={{
            color: fontColor,
            fontFamily: font,
            margin: `0 ${btnSpace}px`,
            fontSize: fontSiz * 0.57,
          }}
        >
          BUTTON
        </a>
      </div>
    </nav>
  );
}
