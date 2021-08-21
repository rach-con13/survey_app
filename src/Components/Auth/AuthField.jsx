import React from "react";
import "./auth.scss";
import PropTypes from "prop-types";
export default function AuthField({ register, name, label }) {
  return (
    <div className="auth__field">
      <label htmlFor={name} className="auth__label">
        {label}
      </label>
      <input name={name} {...register} type="text" className="card__field" />
    </div>
  );
}

AuthField.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
};
