import React from "react";
import "./Header.css";

import { Icon } from "@iconify/react";

function Header() {
  return (
    <div className="header">
      <div className="icon">
        <a>
          <Icon icon="codicon:home" />
        </a>
      </div>
      <div className="project-title">project</div>
    </div>
  );
}

export default Header;
