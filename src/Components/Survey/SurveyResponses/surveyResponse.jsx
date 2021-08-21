import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SurveyContext } from "../../../Globals/Context/SurveyContext";
import UseRealTime from "../../../Globals/Hooks/Firebase/useRealtime";
import ResponseCard from "./responseCard";
import card from "src/Globals/Sass/Elements/Card/card.module.scss";

export default function SurveyResponse() {
  const { surveyResults } = useContext(SurveyContext);
  const { id } = useParams();
  const questions = UseRealTime("question", { field: "surveyID", equalTo: id });
  return (
    <div className={`${card.cards__container} ${card.cards__container__md}`}>
      {questions?.map((question, index) => {
        const { questionType } = question.data();
        return (
          <ResponseCard
            id={question.id}
            key={index}
            index={index}
            questionType={questionType}
            cardData={question.data()}
          />
        );
      })}
    </div>
  );
}
