import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { db } from "../../Lib/Firebase/FirebaseConfig";
import {
  createSurvey,
  getSurveys,
} from "../../Lib/Firebase/FirebaseFunctions/SurveyFunctions";

import "./surveys.scss";
const createNewSurvey = () => {
  createSurvey("Untitled Survey");
};
export default function Surveys(props) {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    let unsubscribe;
    const getRealtimeSurveys = () => {
      unsubscribe = db.collection("survey").onSnapshot((snapshot) => {
        setSurveys(snapshot.docs);
      });
    };
    getRealtimeSurveys();
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="container">
      <header className="surveys__header">
        <h2 className="surveys__title">My Surveys</h2>
        <div className="surveys__search">
          <input style={{ marginTop: "12px" }} className="card__field" />
          <button onClick={createNewSurvey} className="btn btn--secondary">
            Add Survey
          </button>
        </div>
      </header>
      <div className="surveys__content">
        {surveys &&
          surveys.map((survey, index) => {
            let data = survey.data();

            return (
              <>
                <Link to={`survey/${survey.id}`}>
                  <div data-id={survey.id} className="survey__card" key={index}>
                    <p> {data.name}</p>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </div>
  );
}
