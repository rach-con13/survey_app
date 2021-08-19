import React from "react";
import "../SurveyCard/surveyCard.scss";
import "./createSurveyCard.scss";
export default function CreateSurveyCard({ setCards, cards }) {
  const selectQuestionOption = (e) => {
    let name = e.target.dataset.name;
    if (name) {
      let newCard = { type: name };
      let updatedCards = [...cards, { ...newCard }];
      setCards(updatedCards);
    }
  };
  return (
    <div className="create_card">
      <div className="create_card_text">
        <p>Choose a template</p>
      </div>
      <div onClick={selectQuestionOption} className="question__options">
        {/* <p data-name="multiple_choice" className="question__option">
          Multiple Choices
        </p>
        <p data-name="range" className="question__option">
          Range
        </p> */}
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
