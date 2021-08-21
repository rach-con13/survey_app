import React from "react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import UseFirebaseUser from "../../Globals/Hooks/Firebase/useFirebaseUser";
import UseRealTime from "../../Globals/Hooks/Firebase/useRealtime";
import { db } from "../../Lib/Firebase/FirebaseConfig";
import { createResult } from "../../Lib/Firebase/FirebaseFunctions/DataFunctions";

import "./surveys.scss";
const createNewSurvey = (uid) => {
  const newSurvey = {
    name: "Untitled Survey",
    userID: uid,
  };
  createResult("survey", newSurvey);
};

export default function Surveys(props) {
  const { id } = useParams();
  const location = useLocation();
  const surveys = UseRealTime("survey", { field: "userID", equalTo: id });

  return (
    <div className="container">
      <header className="surveys__header">
        <h2 className="surveys__title">My Surveys</h2>
        <div className="surveys__search">
          <input style={{ marginTop: "12px" }} className="card__field" />
          <button
            onClick={() => createNewSurvey(id)}
            className="btn btn--secondary"
          >
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
                <Link to={`/survey/${survey.id}/edit`}>
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
