import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextAnswer from "../SurveyQuestions/TextAnswer/textAnswer";
import CardHeader from "./CardHeader/CardHeader";
import "./surveyCard.scss";
import MultipleChoice from "../SurveyQuestions/MultipleOptions/multipleChoice";
export default function SurveyCard(props) {
  return (
    <div className="card">
      <CardHeader {...props} />
      {props.children}
    </div>
  );
}
