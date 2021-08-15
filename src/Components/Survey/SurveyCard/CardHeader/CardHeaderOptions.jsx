import React from "react";
import "../surveyCard.scss";
import "./cardHeader.scss";
export default function CardHeaderOptions(props) {
  return (
    <div className="card__header__options">
      <div className="card__option">Multiple Choice</div>
      {/* <div className="card__options__dropdown">
        <div className="card__option--dropdown">Range</div>
        <div className="card__option--dropdown">Short Paragraph</div>
        <div className="card__option--dropdown">Long Paragarph</div>
      </div> */}
    </div>
  );
}
