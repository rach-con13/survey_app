import React, { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { updateResult } from "../../../Lib/Firebase/FirebaseFunctions/DataFunctions";

import CardHeader from "./CardHeader/CardHeader";
import "./surveyCard.scss";

export default function SurveyCard(props) {
  const { getValues } = useFormContext();

  const updateTitle = async () => {
    let title = getValues(`card-title-${props.index}`);
    console.log(title);
    // let answers = getValues(`answer-${props.index}`);

    let updatedQuestion = await updateResult("question", props.id, {
      title,
    });
  };

  const updateFieldContent = () => {
    console.log("hey");
  };
  return (
    <div className="card">
      <CardHeader onBlur={updateTitle} {...props} />
      {props.children}
      {/* {React.cloneElement(props.children, {
        onBlur: updateFieldContent,
        answers: props.cardData.answers,
      })} */}
    </div>
  );
}
