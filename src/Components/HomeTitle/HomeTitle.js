import React from "react";
import "./HomeTitle.css";

import { Icon } from "@iconify/react";

function HomeTitle() {
  return (
    <div className="title">
      <p>Привет,</p>
      <div className="p2">
        Это <span>Не</span> <br /> Коммерческое
        <br /> задание
        <div className="pink-button">
          <div className="arrow">
            <Icon icon="bi:arrow-right-circle-fill" />
          </div>
          Что дальше?
        </div>
      </div>
    </div>
  );
}

export default HomeTitle;
