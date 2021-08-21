import React from "react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import UseFirebaseUser from "../../Globals/Hooks/Firebase/useFirebaseUser";
import UseRealTime from "../../Globals/Hooks/Firebase/useRealtime";
import form from "src/Globals/Sass/Elements/Form/form.module.scss";
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
          <input
            aria-label="search"
            placeholder="ex. Untitled"
            style={{ marginTop: "12px" }}
            className={`${form.form__field} ${form.unfocus}`}
          />
          <button
            onClick={() => createNewSurvey(id)}
            className="survey__addBtn"
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
                <div data-id={survey.id} className="survey__card" key={index}>
                  <Link
                    style={{ display: "inline-block" }}
                    to={`/survey/${survey.id}/edit`}
                  >
                    <p className="survey__name"> {data.name}</p>
                  </Link>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
