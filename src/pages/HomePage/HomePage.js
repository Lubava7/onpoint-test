import React from "react";
import "./HomePage.css";

import HomeTitle from "../../Components/HomeTitle/HomeTitle";
import Header from "../../Components/Header/Header";

function HomePage() {
  return (
    <div className="main-container">
      <Header />
      <div>
        <HomeTitle />
        <div className="bakti_1 img"></div>
        <div className="layer4_1 img"></div>
        <div className="layer4_2 img"></div>
        <div className="layer4 img"></div>
        <div className="layer5 img"></div>
        <div className="layer7 img"></div>
        <div className="layer8 img"></div>
        <div className="pink_sperm_1 img"></div>
        <div className="pink_sperm img"></div>
      </div>
      <div className="onpoint">
        <p>onpoint</p>
      </div>
    </div>
  );
}

export default HomePage;
