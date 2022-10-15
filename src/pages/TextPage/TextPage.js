import React from "react";
import "./TextPage.css";
// import { useState, useRef, useEffect } from "react";

import TextContent from "../../Components/TextContent/TextContent";
import Header from "../../Components/Header/Header";

function TextPage() {
  return (
    <div className="second-page">
      <Header />
      <div className="msg">
        <p>
          Текст
          <br /> Сообщения
        </p>
      </div>
      <div className="text-container">
        <div className="div">
          <div className="text-div">
            <p>
              <span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <TextContent />
            <TextContent />
            <TextContent />
          </div>
        </div>
      </div>
      <div className="layer3_6 imgs"></div>
      <div className="layer3_2 imgs"></div>
      <div className="layer3_2_1 imgs"></div>
      <div className="layer3_2_2 imgs"></div>
      <div className="layer3_2_3 imgs"></div>
      <div className="onpoint">
        <p>onpoint</p>
      </div>
    </div>
  );
}

export default TextPage;
