import React, { useState } from "react";
import Nav from "./nav";
import "./main.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";

let fontsCount = 0;
const fonts = [
  "'Work Sans', sans-serif",
  "'Ibarra Real Nova', serif",
  "'Poppins', sans-serif",
  "'Roboto Mono', monospace",
  "'Albert Sans', sans-serif",
  "'Josefin Sans', sans-serif",
];
let orderCount = 0;
const orders = ["space-e", "space-b", "space-b2", "space-c"];

export default function Main() {
  const [transparency, setTransparency] = useState(60);
  const [colorBg, setColorBg] = useState(["#00000060", "#00000060"]);
  const [colorFont, setColorFont] = useState("#c0c9dd");
  const [font, setFont] = useState(fonts[0]);
  const [fontSiz, setFontSiz] = useState(26);
  const [btnSpace, setBtnSpace] = useState(0);
  const [btnHover, setBtnHover] = useState(
    `hover${Math.ceil(Math.random() * 3)}`
  );
  const [navHeight, setNavHeight] = useState(55);
  const [navShadow, setNavShadow] = useState(55);
  const [navOrder, setNavOrder] = useState("space-e");

  let cssCopy = `
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;400;500;600;700&display=swap");
  /* font-family: 'Work Sans', sans-serif; */
  @import url("https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400;0,500;0,700;1,700&display=swap");
  /* font-family: 'Ibarra Real Nova', serif; */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700&display=swap");
  /* font-family: 'Poppins', sans-serif; */
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,400;0,600;0,700;1,200&display=swap");
  /* font-family: 'Roboto Mono', monospace; */
  @import url("https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100;0,300;0,400;0,600;0,700;1,300;1,700&display=swap");
  /* font-family: 'Albert Sans', sans-serif; */
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,300;0,400;0,600;0,700;1,100;1,300;1,400;1,600;1,700&display=swap");
  /* font-family: 'Josefin Sans', sans-serif; */
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
  /* font-family: 'Bebas Neue', cursive; */
  @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0");
  
  .custom-nav {
    width: 100%;
    z-index: 99999999;
  
    position: sticky;
    overflow: hidden;
    top: 0;
  
    background: linear-gradient(220.55deg, ${colorBg[0]} 0%, ${
    colorBg[1]
  } 100%);
    color: ${colorFont}; 
    height: ${navHeight}px;
    box-shadow: 0 0 29px #000000${navShadow};
  
  
    backdrop-filter: blur(7px);
    display: flex;
    flex-direction: row;
    transition: all 0.2s ease;
  }
  
  .space-e {
    justify-content: space-evenly;
    align-items: center;
  }
  
  .space-c {
    justify-content: center;
    align-items: center;
  }
  
  .space-c > h2 {
    position: absolute;
    left: 20px;
  }
  
  .space-b {
    justify-content: space-between;
    align-items: center;
  }
  
  .space-b > h2 {
    margin: 0 20px;
  }
  
  .space-b2 {
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }
  
  .space-b2 > h2 {
    margin: 0 20px;
  }
  
  .custom-nav h2 {
    font-family: "Work Sans", sans-serif;
    line-height: normal;
    transition: all 0.2s ease;
    user-select: none;
  
      color: ${colorFont};
      font-family: ${font};
      font-size: ${fontSiz}px;
  
  }
  
  .custom-nav a {
      color: ${colorFont};
      font-family: ${font};
      margin: 0 ${btnSpace}px;
      font-size: ${fontSiz * 0.57}px;
  }
  
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
  
  .nav-btn {
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 7px;
    opacity: 0.8;
    line-height: normal;
  }
  
  .hover1:hover {
    opacity: 0.5;
  }
  
  .hover2:hover {
    background-color: #ffffff17;
  }
  
  .hover3:hover {
    transform: scale(1.2);
  }
  
  .custom-nav span {
    display: none;
    pointer-events: none;
    color: ${colorFont};
  }
  
  @media (max-width: 700px) {
    .custom-nav h2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
    }
    .custom-nav h2 span {
      display: inline-block;
      pointer-events: all;
      transition: all 0.2s ease;
      transform: scale(1.1);
      cursor: pointer;
    }
    .space-b {
      justify-content: space-evenly;
      align-items: center;
    }
  
    .space-c {
      justify-content: space-evenly;
      align-items: center;
    }
  
    .space-c > h2 {
      position: inherit;
    }
  
    .space-b2 {
      justify-content: space-evenly;
      align-items: center;
    }
    .custom-nav {
      flex-direction: column-reverse;
    }
    .btn-container {
      opacity: 0;
      pointer-events: none;
      width: 0;
      height: 0;
      transition: all .2s ease;
      flex-direction: column;
      position: absolute;
    }
    .custom-nav.open {
      height: 55vh !important;
    }
    .nav-btn {
      width: 100%;
    }
    .custom-nav.open .btn-container {
      opacity: 1;
      height: 45vh;
      width: 100%;
      position: relative;
      pointer-events: all;
    }
    .custom-nav.open .nav-btn {
      height: 50px;
    }
  }
  `;

  let htmlCopy = `
    <nav class="custom-nav ${navOrder}">
      <h2>
        <!-- TITLE -->
        navCreator
        <!-- TITLE -->
        <span class="material-symbols-outlined"> menu </span>
      </h2>

      <div class="btn-container">
        <!-- BUTTONS -->
        <a class="nav-btn ${btnHover}"> BUTTON </a>
        <a class="nav-btn ${btnHover}"> BUTTON </a>
        <a class="nav-btn ${btnHover}"> BUTTON </a>
        <!-- BUTTONS -->
      </div>
    </nav>
  `;

  let jsCopy = `
  const openBurger = () => {
    const nav = document.querySelector(".custom-nav");
    const burg = document.querySelector(".custom-nav h2 span");

    burg.addEventListener("click", ()=>{
        nav.classList.toggle("open");
    })
    
  };

  openBurger()
  `

  const prevOrder = () => {
    if (orderCount === 0) {
      orderCount = 3;
    } else {
      orderCount--;
    }
    const o = orders[orderCount];
    setNavOrder(o);
  };

  const nextOrder = () => {
    if (orderCount === 3) {
      orderCount = 0;
    } else {
      orderCount++;
    }
    const o = orders[orderCount];
    setNavOrder(o);
  };

  const changeFontSiz = () => {
    let s = Number(document.querySelector("input[name=font-s]").value);
    setFontSiz(s);
  };

  const changeNavShadow = () => {
    let s = Number(document.querySelector("input[name=nav-s]").value);
    setNavShadow(s);
  };

  const changeNavHeight = () => {
    let h = Number(document.querySelector("input[name=nav-h]").value);
    setNavHeight(h);
  };

  const changeBtnHover1 = () => {
    setBtnHover("hover1");
  };

  const changeBtnHover2 = () => {
    setBtnHover("hover2");
  };

  const changeBtnHover3 = () => {
    setBtnHover("hover3");
  };

  const changeBtnSpace = () => {
    let s = document.querySelector("input[name=btn-space]").value;
    setBtnSpace(s);
  };

  const prevFont = () => {
    if (fontsCount === 0) {
      fontsCount = 5;
    } else {
      fontsCount--;
    }
    const f = fonts[fontsCount];
    setFont(f);
  };

  const nextFont = () => {
    if (fontsCount === 5) {
      fontsCount = 0;
    } else {
      fontsCount++;
    }
    const f = fonts[fontsCount];
    setFont(f);
  };

  const changeFontColor = () => {
    let c = document.querySelector("input[name=color-font]").value;
    setColorFont(c);
  };

  const changeTransparency = () => {
    let t = String(document.querySelector("input[name=transparency]").value);
    if (t.length === 1) {
      t = `0${t}`;
    }
    if (t < 81) {
      setTransparency(t);
      if (colorBg[0] !== colorBg[1]) {
        let c1 = document.querySelector("input[name=color1]").value;
        let c2 = document.querySelector("input[name=color2]").value;
        c1 = `${c1}${transparency}`;
        c2 = `${c2}${transparency}`;
        setColorBg([c1, c2]);
      } else {
        let c = document.querySelector("input[name=color]").value;
        c = `${c}${transparency}`;
        setColorBg([c, c]);
      }
    } else {
      setTransparency("");
      if (colorBg[0] !== colorBg[1]) {
        let c1 = document.querySelector("input[name=color1]").value;
        let c2 = document.querySelector("input[name=color2]").value;
        c1 = `${c1}${transparency}`;
        c2 = `${c2}${transparency}`;
        setColorBg([c1, c2]);
      } else {
        let c = document.querySelector("input[name=color]").value;
        c = `${c}${transparency}`;
        setColorBg([c, c]);
      }
    }
  };

  const changeSolidBg = () => {
    let c = document.querySelector("input[name=color]").value;
    c = `${c}${transparency}`;
    setColorBg([c, c]);
  };

  const changeRadialBg1 = () => {
    let c = document.querySelector("input[name=color1]").value;
    c = `${c}${transparency}`;
    setColorBg([c, colorBg[1]]);
  };

  const changeRadialBg2 = () => {
    let c = document.querySelector("input[name=color2]").value;
    c = `${c}${transparency}`;
    setColorBg([colorBg[0], c]);
  };

  const copyHtml = async ()=>{

    navigator.clipboard.writeText(htmlCopy)
    const alr = document.querySelector(".copy-html") 
    alr.classList.add("in")
    setTimeout(() => {
      alr.classList.remove("in")
    }, 1500);
    
  }
  
  const copyCss = async ()=>{
    navigator.clipboard.writeText(cssCopy)
    const alr = document.querySelector(".copy-css") 
    alr.classList.add("in")
    setTimeout(() => {
      alr.classList.remove("in")
    }, 1500);
  }

  const copyJs = async ()=>{
    navigator.clipboard.writeText(jsCopy)
    const alr = document.querySelector(".copy-js") 
    alr.classList.add("in")
    setTimeout(() => {
      alr.classList.remove("in")
    }, 1500);
  }

  return (
    <>
      <Nav
        color={colorBg}
        fontColor={colorFont}
        font={font}
        btnSpace={btnSpace}
        btnHover={btnHover}
        navHeight={navHeight}
        navShadow={navShadow}
        fontSiz={fontSiz}
        navOrder={navOrder}
      />
      <div className="copy-container">
        <p>COPY</p>
        <div className="copy" onClick={copyHtml}>
          <ImHtmlFive />
          <span class="tooltip">Copy HTML</span>
        </div>
        <div className="copy" onClick={copyCss}>
          <ImCss3 />
          <span class="tooltip">Copy CSS</span>
        </div>
        <div className="copy" onClick={copyJs}>
          <IoLogoJavascript />
          <span class="tooltip">Copy JS</span>
        </div>
      </div>
      <div className="box-container">
        <div className="box bcg-options">
          <b>BACKGROUND</b>
          <div className="box2">
            <div className="box solid-bcg">
              <p className="info-box">SOLID</p>
              <input type="color" name="color" onChange={changeSolidBg} />
            </div>
            <div className="box gradient-bcg">
              <p className="info-box">RADIAL</p>
              <input type="color" name="color1" onChange={changeRadialBg1} />
              <input type="color" name="color2" onChange={changeRadialBg2} />
            </div>
            <div className="box glass-bcg">
              <p className="info-box">GLASS OPACITY</p>
              <input
                type="range"
                name="transparency"
                placeholder="100"
                onChange={changeTransparency}
                max="82"
                defaultValue="60"
              />
            </div>
          </div>
        </div>

        <div className="box font-options">
          <b>FONTS</b>
          <div className="box2">
            <div className="box">
              <p className="info-box">FONT</p>
              <FaArrowAltCircleLeft onClick={prevFont} />
              <FaArrowAltCircleRight onClick={nextFont} />
            </div>
            <div className="box">
              <p className="info-box">SIZE</p>
              <input
                type="range"
                name="font-s"
                min="23"
                max="28"
                defaultValue="26"
                onChange={changeFontSiz}
              />
            </div>
            <div className="box">
              <p className="info-box">COLOR</p>
              <input
                type="color"
                name="color-font"
                onChange={changeFontColor}
              />
            </div>
          </div>
        </div>

        <div className="box buttons-options">
          <b>BUTTONS</b>
          <div className="box2">
            <div className="box">
              <p className="info-box">SEPARATION</p>
              <input
                type="range"
                name="btn-space"
                min="0"
                max="20"
                defaultValue="0"
                onChange={changeBtnSpace}
              />
            </div>
            <div className="box">
              <p className="info-box">HOVER</p>
              <div className="btn-hover hoverbtn1" onClick={changeBtnHover1}>
                1
              </div>
              <div className="btn-hover hoverbtn2" onClick={changeBtnHover2}>
                2
              </div>
              <div className="btn-hover hoverbtn3" onClick={changeBtnHover3}>
                <p>3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box extra-options">
          <b>EXTRAS</b>
          <div className="box2">
            <div className="box">
              <p className="info-box">HEIGHT</p>
              <input
                type="range"
                name="nav-h"
                min="45"
                max="100"
                defaultValue="55"
                onChange={changeNavHeight}
              />
            </div>
            <div className="box">
              <p className="info-box">ORDER</p>
              <FaArrowAltCircleLeft onClick={prevOrder} />
              <FaArrowAltCircleRight onClick={nextOrder} />
            </div>
            <div className="box">
              <p className="info-box">SHADOW</p>
              <input
                type="range"
                name="nav-s"
                min="0"
                max="80"
                defaultValue="40"
                onChange={changeNavShadow}
              />
            </div>
          </div>
        </div>
      </div>
      <span className="copy-done copy-html">HTML copied to clipboard</span>
      <span className="copy-done copy-css">CSS copied to clipboard</span>
      <span className="copy-done copy-js">JS copied to clipboard</span>
    </>
  );
}
