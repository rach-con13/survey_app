import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSurvey } from "src/Lib/Firebase/FirebaseFunctions/SurveyFunctions";
import header from "./surveyHeader.module.scss";
import "src/Globals/Sass/Elements/Text/text.scss";
import PropTypes from "prop-types";

export default function SurveyHeader(props) {
  let { id } = useParams();
  const [survey, setSurvey] = useState(null);

  useEffect(async () => {
    const getSelectedSurvey = await getSurvey(id);
    setSurvey(getSelectedSurvey?.data()?.name);
  }, []);
  return (
    <div className={header.survey__header}>
      <div className={header.header__content}>
        <div className={header.text__content}>
          <h4 className={`text--heading ${header.survey__title}`}>{survey}</h4>
          <button className={header.survey__icon}>
            <p className="text--subHeading">
              <i className="far fa-edit"></i>
            </p>
          </button>
        </div>
        <div className={header.text__content}>
          <Link to={`/survey/${id}/edit`}>
            <p className={`text--subHeading ${header.survey__option}`}>
              Questions
            </p>
          </Link>
          <Link to={`/responses/${id}/edit`}>
            <p className={`text--subHeading ${header.survey__option}`}>
              Results
            </p>
          </Link>
        </div>
        <button onClick={props.onClick} className="btn btn--secondary">
          Publish
        </button>
      </div>
    </div>
  );
}

SurveyHeader.propTypes = {
  onClick: PropTypes.func, // click event for displaying SurveyPublish modal
};
