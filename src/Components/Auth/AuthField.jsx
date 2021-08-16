import React from "react";
import "./auth.scss";
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
