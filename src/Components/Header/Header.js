import React from "react";
import { useState } from "react";

import "./Header.css";

import { Icon } from "@iconify/react";

function Header() {
  const [isLeft, setIsLeft] = useState(false);

  function backHome() {
    console.log("back home");
    setIsLeft(true);
  }

  return (
    <div className="header">
      <div onClick={backHome} className="icon">
        <a>
          <Icon icon="codicon:home" />
        </a>
      </div>
      <div className="project-title">project</div>
    </div>
  );
}

export default Header;
