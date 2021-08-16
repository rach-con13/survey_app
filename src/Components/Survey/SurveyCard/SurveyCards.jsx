import React from "react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CreateSurveyCard from "../CreateSurveyCard/CreateSurveyCard";
import SurveyCard from "./SurveyCard";
import cardQuestionType from "../SurveyQuestions/Utils/SurveyQuestionType";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { SurveyContext } from "../../../Globals/Context/SurveyContext";
import SurveyHeader from "./SurveyHeader";
import { useEffect } from "react";
import { db } from "../../../Lib/Firebase/FirebaseConfig";

export default function SurveyCards(props) {
  const methods = useForm();
  const { setResults } = useContext(SurveyContext);
  const { id } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let unsubscribe = db.collection("question").onSnapshot((snapshot) => {
      setCards(snapshot.docs);
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
      <SurveyHeader />
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
