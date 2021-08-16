import React from "react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import "./textAnswer.scss";
export default function TextAnswer(props) {
  const { register, watch } = useFormContext();
  const watchTextAnswer = watch(`answer-${props.id}`);

  useEffect(() => {}, [watchTextAnswer]);

  return (
    <div className="card__description__container">
      <textarea
        {...register(`answer-${props.id}`)}
        onBlur={props.onBlur}
        defaultValue={props.answers}
        className={`card__field card__description--${props.answerType}`}
      ></textarea>
      <p>0/100</p>
    </div>
  );
}
