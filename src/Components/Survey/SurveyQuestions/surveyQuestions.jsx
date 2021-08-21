import React from "react";
import { useParams } from "react-router-dom";
import SurveyCard from "src/Components/SurveyCard/SurveyCard";
import UseRealTime from "src/Globals/Hooks/Firebase/useRealtime";
import cardQuestionType from "./Utils/SurveyQuestionType";

export default function SurveyQuestions(props) {
  const { id } = useParams();
  const cards = UseRealTime("question", { field: "surveyID", equalTo: id });

  return (
    <>
      {cards?.map((card, index) => {
        let cardData = card.data();

        return (
          <SurveyCard
            cardData={cardData}
            id={card.id}
            index={index}
            key={index}
          >
            {cardQuestionType(cardData.questionType, index)}
          </SurveyCard>
        );
      })}
    </>
  );
}
