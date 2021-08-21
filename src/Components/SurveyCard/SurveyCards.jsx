import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CreateSurveyCard from "../Survey/CreateSurveyCard/CreateSurveyCard";
import cardStyles from "src/Globals/Sass/Elements/Card/card.module.scss";
import { db } from "src/Lib/Firebase/FirebaseConfig";
import UseRealTime from "src/Globals/Hooks/Firebase/useRealtime";
import { useLocation, useParams } from "react-router-dom";
import SurveyQuestions from "../Survey/SurveyQuestions/surveyQuestions";

export default function SurveyCards() {
  const methods = useForm();
  const { id } = useParams();
  const { pathname } = useLocation();
  const isEditable = pathname.split("/")[3] === "edit" ? true : false;

  const cards = UseRealTime("question", { field: "surveyID", equalTo: id });

  const createSubAnswer = async (id, data) => {
    // let answers = []
    let createAnswer = await db
      .collection("question")
      .doc(id)
      .collection("answers")
      .add({ result: data });
    return createAnswer;
  };

  const onSubmit = (data) => {
    let results = [];

    for (let i = 0; i <= cards.length; i++) {
      let newResult;
      if (i <= cards.length - 1) {
        let title = data[`card-title-${i}`];
        let answer = data[`answer-${i}`];

        newResult = { title, answer: answer ? answer : null };
        results.push(newResult);
      }
    }

    // map through cards
    cards.map((card, index) => {
      let id = card.id;
      let currentQuestion = results[index];

      try {
        let addQuestionAnswer = createSubAnswer(id, currentQuestion);
        console.log(addQuestionAnswer);
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <>
      <div className={cardStyles.cards__container__lg}>
        <FormProvider {...methods}>
          <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <SurveyQuestions />
            {isEditable && <CreateSurveyCard />}
            {!isEditable && (
              <button
                type="submit"
                style={{ margin: "2rem 0rem", textAlign: "right" }}
                className="btn btn--secondary"
              >
                Submit
              </button>
            )}
          </form>
        </FormProvider>
      </div>
    </>
  );
}
