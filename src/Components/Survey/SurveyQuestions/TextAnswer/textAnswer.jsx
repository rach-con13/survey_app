import React from "react";

import { useFormContext } from "react-hook-form";
import styles from "../../../../Globals/Sass/Elements/Form/form.module.scss";
import "./textAnswer.scss";
import PropTypes from "prop-types";
export default function TextAnswer(props) {
  const { register } = useFormContext();

  return (
    <div className="card__description__container">
      <textarea
        {...register(`answer-${props.id}`)}
        className={`${styles.form__field} ${
          styles.form__text - props.answerType
        }`}
        placeholder="Add a response"
      ></textarea>
      <p>0/100</p>
    </div>
  );
}
TextAnswer.propTypes = {
  answerType: PropTypes.string, // returns type of answer ( long , short)
  id: PropTypes.string,
};
