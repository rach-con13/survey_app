import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../Lib/Firebase/FirebaseConfig";
import ResponseChart from "./responseChart";
import "./surveyResponse.scss";
export default function ResponseCard({ title, questionType, id }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let unsubscribe;

    const getAnswers = () => {
      unsubscribe = db
        .collection("question")
        .doc(id)
        .collection("answers")
        .onSnapshot((snapshot) => {
          setAnswers(snapshot.docs);
        });
    };

    getAnswers();
    console.log(questionType);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="response__card">
      <header className="response__header">
        <h4 className="response__title">{title}</h4>
        <p className="response__num">{answers.length} responses</p>
      </header>
      <div className="answers">
        {answers?.map((answer, index) => {
          let data = answer.data();

          return (
            <div key={answer.id} className="answer__card">
              {data.result?.answer}
            </div>
          );
        })}
      </div>
    </div>
  );
}
