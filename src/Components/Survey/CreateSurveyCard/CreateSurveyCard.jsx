import React from "react";
import { useParams } from "react-router-dom";
import { createResult } from "../../../Lib/Firebase/FirebaseFunctions/DataFunctions";
import "../SurveyCard/surveyCard.scss";
import "./createSurveyCard.scss";
export default function CreateSurveyCard({ setCards, cards }) {
  const { id } = useParams();
  const selectQuestionOption = (e) => {
    let name = e.target.dataset.name;
    const data = {
      surveyID: id,
      questionType: name,
      title: "",
      answers: [],
    };

    createResult("question", data);
  };
  return (
    <div className="create_card">
      <div className="create_card_text">
        <p>Choose a template</p>
      </div>
      <div onClick={selectQuestionOption} className="question__options">
        <p data-name="shortAnswer" className="question__option">
          Short Answer
        </p>
        <p data-name="paragraph" className="question__option">
          Paragraph
        </p>
      </div>
    </div>
  );
}
