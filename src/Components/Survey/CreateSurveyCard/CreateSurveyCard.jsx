import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../Lib/Firebase/FirebaseConfig";
import { createResult } from "../../../Lib/Firebase/FirebaseFunctions/DataFunctions";
import "../SurveyCard/surveyCard.scss";
import "./createSurveyCard.scss";
export default function CreateSurveyCard() {
  const { id } = useParams();
  const selectQuestionOption = async (e) => {
    let name = e.target.dataset.name;
    const data = {
      surveyID: id,
      questionType: name,
      title: "",
    };
    try {
      let newQuestion = await createResult("question", data);
      let newAnswer = await createSubAnswer(newQuestion.id);
      console.log(newQuestion);
    } catch (err) {
      console.log(err);
    }
  };
  const createSubAnswer = async (id) => {
    // let answers = []
    let createAnswer = await db
      .collection("question")
      .doc(id)
      .collection("answers")
      .add({ result: "" });
    return createAnswer;
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
