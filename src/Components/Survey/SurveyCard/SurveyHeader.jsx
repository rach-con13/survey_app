import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { getSurvey } from "../../../Lib/Firebase/FirebaseFunctions/SurveyFunctions";

export default function SurveyHeader(props) {
  let { id } = useParams();
  const [survey, setSurvey] = useState(null);
  useEffect(async () => {
    const getSelectedSurvey = await getSurvey(id);
    setSurvey(getSelectedSurvey.data().name);
  }, []);
  return (
    <>
      <h4 className="survey__title">
        {survey}
        <span>
          <button style={{ marginLeft: "12px" }} className="btn btn--secondary">
            Rename
          </button>
        </span>
      </h4>
    </>
  );
}
