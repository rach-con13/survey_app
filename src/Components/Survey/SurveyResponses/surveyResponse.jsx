import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SurveyContext } from "../../../Globals/Context/SurveyContext";
import UseRealTime from "../../../Globals/Hooks/Firebase/useRealtime";
import ResponseCard from "./responseCard";
import "./surveyResponse.scss";
export default function SurveyResponse({ title, answer, responseAmount }) {
  const { surveyResults } = useContext(SurveyContext);
  const { id } = useParams();
  const questions = UseRealTime("question", { field: "surveyID", equalTo: id });
  return (
    <div className="container">
      {questions?.map((question, index) => {
        const { title, questionType } = question.data();
        return (
          <ResponseCard
            id={question.id}
            key={index}
            questionType={questionType}
            title={title}
          />
        );
      })}
    </div>
  );
}
