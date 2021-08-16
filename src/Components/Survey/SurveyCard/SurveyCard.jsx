import React, { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { updateResult } from "../../../Lib/Firebase/FirebaseFunctions/DataFunctions";

import CardHeader from "./CardHeader/CardHeader";
import "./surveyCard.scss";

export default function SurveyCard(props) {
  const { getValues } = useFormContext();

  const getResults = async () => {
    let title = getValues(`card-title-${props.index}`);
    let answers = getValues(`answer-${props.index}`);

    let updatedQuestion = await updateResult("question", props.id, {
      title,
      answers,
    });
  };

  return (
    <div className="card">
      <CardHeader onBlur={getResults} {...props} />
      {React.cloneElement(props.children, {
        onBlur: getResults,
        answers: props.cardData.answers,
      })}
    </div>
  );
}
