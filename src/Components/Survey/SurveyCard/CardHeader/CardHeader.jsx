import React from "react";
import "../surveyCard.scss";
import "./cardHeader.scss";
import CardHeaderOptions from "./CardHeaderOptions";
export default function CardHeader(props) {
  return (
    <div className="card__header">
      <input
        {...props.register}
        type="text"
        className="card__field card__title"
      />
      <CardHeaderOptions />
    </div>
  );
}
