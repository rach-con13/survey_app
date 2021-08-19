import React from "react";
import { useContext } from "react";
import { SurveyContext } from "../../../Globals/Context/SurveyContext";
import ResponseCard from "./responseCard";
import "./surveyResponse.scss";
export default function SurveyResponse({ title, answer, responseAmount }) {
  const { surveyResults } = useContext(SurveyContext);
  console.log(surveyResults);
  return (
    <div className="container">
      <ResponseCard title="What is my name?" responseAmount={7} />
    </div>
  );
}
