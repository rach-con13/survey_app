import React from "react";

import "./textAnswer.scss";
export default function TextAnswer(props) {
  return (
    <div className="card__description__container">
      <textarea
        {...props.register}
        className={`card__field card__description--${props.answerType}`}
      ></textarea>
      <p>0/100</p>
    </div>
  );
}
