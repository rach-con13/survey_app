import React from "react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CreateSurveyCard from "../CreateSurveyCard/CreateSurveyCard";
import SurveyCard from "./SurveyCard";
import cardQuestionType from "../SurveyQuestions/Utils/SurveyQuestionType";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SurveyContext } from "../../../Globals/Context/SurveyContext";
export default function SurveyCards(props) {
  const methods = useForm();
  const { setResults } = useContext(SurveyContext);
  const [cards, setCards] = useState([
    {
      type: "shortAnswer",
    },
  ]);

  const onSubmit = (data) => {
    let results = [];
    for (let i = 0; i < Object.entries(data).length; i += 2) {
      let entries = Object.entries(data);
      let newResult;
      if (i !== entries.length - 1) {
        newResult = { title: entries[i][1], answer: entries[i + 1][1] };
        results.push(newResult);
      }
    }

    setResults(results);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
          <div style={{ display: "flex", width: "60%", margin: "0 auto" }}>
            <button className="btn btn--primary">Questions</button>
            <Link to="/response">
              <button
                style={{ marginLeft: "0.6rem" }}
                className="btn btn--primary"
              >
                Responses
              </button>
            </Link>
          </div>
          {cards.map((card, index) => {
            return (
              <SurveyCard index={index} key={index}>
                {cardQuestionType(card.type, index)}
              </SurveyCard>
            );
          })}
          <CreateSurveyCard setCards={setCards} cards={cards} />
          <Link to="/response">
            <button
              type="submit"
              style={{ margin: "2rem 0rem", textAlign: "right" }}
              className="btn btn--secondary"
            >
              Submit
            </button>
          </Link>
        </form>
      </FormProvider>
    </>
  );
}
