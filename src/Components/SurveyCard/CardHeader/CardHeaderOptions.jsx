import React from "react";

import cardHeader from "./cardHeader.module.scss";
import "src/Globals/Sass/Elements/Text/text.scss";
export default function CardHeaderOptions(props) {
  return (
    <div className={cardHeader.options}>
      <p className={`${cardHeader.currentOption} text--subHeading`}>Text</p>
      <p className={`text--subHeading ${cardHeader.icon}`}>
        <i className="fas fa-align-justify"></i>
      </p>
      {props.editable && (
        <p className={`text--subHeading ${cardHeader.icon}`}>
          <i className="fas fa-angle-right"></i>
        </p>
      )}
      {/* <div className="card__options__dropdown">
        <div className="card__option--dropdown">Range</div>
        <div className="card__option--dropdown">Short Paragraph</div>
        <div className="card__option--dropdown">Long Paragarph</div>
      </div> */}
    </div>
  );
}
