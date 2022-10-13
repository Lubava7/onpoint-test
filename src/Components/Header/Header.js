import React from "react";
import "./Header.css";

import { Icon } from "@iconify/react";

function Header() {
  return (
    <div className="header">
      <div className="icon">
        <Icon icon="codicon:home" />
      </div>
      <div className="project-title">project</div>
    </div>
  );
}

export default Header;
