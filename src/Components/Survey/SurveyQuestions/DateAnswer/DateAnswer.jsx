import React from "react";
import "./dateAnswer.scss";
export default function DateAnswer(props) {
  return (
    <div className="container">
      <input disabled={true} type="date" className="date__input" />
    </div>
  );
}
