import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./auth.scss";

import AuthField from "./AuthField";
import { completeLogin } from "./AuthFunctions/completeLogin";
import { completeSignUp } from "./AuthFunctions/completeSignUp";
import { useHistory } from "react-router-dom";

export default function AuthForm(props) {
  const [message, setMessage] = useState("");
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const completeAuth = (data) => {
    props.isLogin
      ? completeLogin(history, data, setMessage)
      : completeSignUp(data, setMessage);
  };

  return (
    <div className="auth__container">
      <header className="auth__header">
        <h4 className="auth__title">
          {props.title}
          <span className="auth__spanText">{props.spanText}</span>
        </h4>
      </header>
      <form onSubmit={handleSubmit(completeAuth)} className="auth__form">
        {props.fields.map((field, index) => {
          return (
            <AuthField
              key={index}
              label={field.label}
              name={field.name}
              register={register(field.name)}
            />
          );
        })}

        <button style={{ marginTop: "0.9rem" }} className="btn btn--secondary">
          {props.title}
        </button>

        <p>{message}</p>
      </form>
    </div>
  );
}
