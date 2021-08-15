import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreateSurveyCard from "../CreateSurveyCard/CreateSurveyCard";
import TextAnswer from "../SurveyQuestions/TextAnswer/textAnswer";
import SurveyCard from "./SurveyCard";
import MultipleChoice from "../SurveyQuestions/MultipleOptions/multipleChoice";
import DateAnswer from "../SurveyQuestions/DateAnswer/DateAnswer";
export default function SurveyCards(props) {
  const { register, handleSubmit } = useForm();
  const [cards, setCards] = useState([
    {
      type: "date",
    },
  ]);

  const cardQuestionType = (questionType, index) => {
    switch (questionType) {
      case "multipleChoice":
        return <MultipleChoice register={register} />;
      case "date":
        return <DateAnswer />;
      case "shortAnswer":
        return (
          <TextAnswer
            register={register(`answer-${index}`)}
            answerType="short"
          />
        );
      case "paragraph":
        return (
          <TextAnswer
            register={register(`answer-${index}`)}
            answerType="long"
          />
        );
    }
  };

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

    console.log(results);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", width: "60%", margin: "0 auto" }}>
          <button className="btn btn--primary">Questions</button>
          <button style={{ marginLeft: "0.6rem" }} className="btn btn--primary">
            Responses
          </button>
        </div>
        {cards.map((card, index) => {
          return (
            <SurveyCard register={register(`title-${index}`)} key={index}>
              {cardQuestionType(card.type, index)}
            </SurveyCard>
          );
        })}
        <CreateSurveyCard setCards={setCards} cards={cards} />
        <button
          type="submit"
          style={{ margin: "2rem 0rem", textAlign: "right" }}
          className="btn btn--secondary"
        >
          Submit
        </button>
      </form>
    </>
  );
}
