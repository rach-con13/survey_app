import React from "react";
import "./header.scss";
import "../Globals/Sass/Elements/Button/button.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h4 className="headerTitle">Survey Donkey</h4>
        <div className="headerOptions">
          <button className="btn btn--secondary">Share</button>
        </div>
      </div>
    </header>
  );
}
