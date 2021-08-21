import React from "react";
import "./auth.scss";
import PropTypes from "prop-types";
import form from "src/Globals/Sass/Elements/Form/form.module.scss";
import "src/Globals/Sass/Elements/Card/errorCard.scss";
import "src/Globals/Sass/Elements/Text/text.scss";
export default function AuthField({ register, name, label, error }) {
  return (
    <div className="auth__field">
      <label htmlFor={name} className="auth__label">
        {label}
      </label>
      <input
        name={name}
        {...register}
        type="text"
        className={`${form.form__field}  ${form.unfocus} ${
          error && form.danger
        }`}
      />
      <p className=" error__message">{error}</p>
    </div>
  );
}

AuthField.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};
