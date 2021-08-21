import React from "react";
import { useFormContext } from "react-hook-form";
import CardHeaderOptions from "./CardHeaderOptions";
import styles from "./cardHeader.module.scss";
import form from "src/Globals/Sass/Elements/Form/form.module.scss";
import card from "src/Globals/Sass/Elements/Card/card.module.scss";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
export default function CardHeader(props) {
  const methods = useFormContext();
  const toggleIcon = props.open ? "angle-up" : "angle-down";
  const { pathname } = useLocation();
  const isEditable = pathname.split("/")[3] === "edit" ? true : false;

  // if it's editable methods will exist otherwise it will return null
  const registerTitle =
    methods && methods.register(`card-title-${props.index}`);

  return (
    <div className={card.card__header}>
      <div className={card.header__inner}>
        <div className={styles.input__box}>
          <p onClick={props.toggle} className="text--subHeading">
            <i className={`fas fa-${toggleIcon}`}></i>
          </p>

          <input
            {...registerTitle}
            type="text"
            onBlur={isEditable ? props.onBlur : undefined}
            readOnly={!isEditable}
            defaultValue={props.cardData.title}
            className={`${form.form__field}`}
          />
        </div>
        <CardHeaderOptions />
      </div>
    </div>
  );
}

CardHeader.propTypes = {
  open: PropTypes.bool,
  onBlur: PropTypes.func,
  toggle: PropTypes.func,
  cardData: PropTypes.object,
  index: PropTypes.number,
};
