import React from "react";
import card from "src/Globals/Sass/Elements/Card/card.module.scss";
import styles from "./surveyPublish.module.scss";
import "src/Globals/Sass/Elements/Text/text.scss";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
export default function SurveyPublishCard(props) {
  const visibleClass = props.open ? styles.visible : styles.hidden;
  const { id } = useParams();
  const surveyLink = `https://surveydonkeyapp.netlify.app/survey/${id}`;
  return (
    <>
      <div
        className={`${styles.card__bg} ${props.open && styles.bg__visible}`}
      ></div>
      <div className={`${card.card} ${styles.publishCard} ${visibleClass}`}>
        <div className={card.card__header}>
          <div className={card.header__inner}>
            <p className="text text--heading">Share Survey</p>
            <p
              onClick={() => props.setOpen(false)}
              className="text text--subHeading"
            >
              <i className="far fa-times-circle"></i>
            </p>
          </div>
        </div>
        <div style={{ textAlign: "right" }} className={card.card__content}>
          <div className={styles.publish__link}>
            <p className="text text--subHeading">{surveyLink}</p>
          </div>
          <button className={styles.publish__btn}>Copy</button>
        </div>
      </div>
    </>
  );
}
SurveyPublishCard.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
