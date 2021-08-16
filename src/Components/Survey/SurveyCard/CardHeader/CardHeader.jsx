import React from "react";
import { useFormContext } from "react-hook-form";
import "../surveyCard.scss";
import "./cardHeader.scss";
import CardHeaderOptions from "./CardHeaderOptions";
export default function CardHeader(props) {
  const { register } = useFormContext();

  return (
    <div className="card__header">
      <input
        {...register(`card-title-${props.index}`)}
        type="text"
        onBlur={props.onBlur}
        defaultValue={props.cardData.title}
        className="card__field card__title"
      />
      <CardHeaderOptions />
    </div>
  );
}
