import React, { useState } from "react";
import Nav from "./nav";
import "./main.css";

export default function Main() {
  const [transparency, setTransparency] = useState("");
  const [colorBg, setColorBg] = useState(["black", "black"]);

  const changeTransparency = () => {
    let t = String(document.querySelector("input[name=transparency]").value);
    if (t.length == 1) {
        t = `0${t}`
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
    c = `${c}${transparency}`
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

  return (
    <>
      <Nav color={colorBg} />

      <div className="box-container">
        <div className="box bcg-types">
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
            <p className="info-box">OPACITY</p>
              <input
                type="range"
                name="transparency"
                placeholder="100"
                onChange={changeTransparency}
                max="85"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
