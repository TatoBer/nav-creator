import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <small>
          Developed and designed by Tato Bernardini. 2022 All rights reserved.
        </small>
        <small>
          <a
            target="_blank"
            href="https://github.com/TatoBer/nav-creator"
          >
            Repository
          </a>{" "}
          | <a target="_blank" href="https://charming-frangollo-e3a17a.netlify.app/">Contact me</a>
        </small>
      </footer>
      <div className="footer-separator"></div>
    </>
  );
}
