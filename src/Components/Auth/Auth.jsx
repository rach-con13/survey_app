import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./auth.scss";
import AuthField from "./AuthField";
import { completeLogin } from "./AuthFunctions/completeLogin";
import { completeSignUp } from "./AuthFunctions/completeSignUp";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { authSchema } from "./AuthFunctions/authValidation";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AuthForm(props) {
  const [message, setMessage] = useState("");
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const completeAuth = async (data) => {
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
          let errorMessage = errors && errors[field.name]?.message;

          return (
            <AuthField
              key={index}
              label={field.label}
              name={field.name}
              register={register(field.name)}
              error={errorMessage}
            />
          );
        })}
        {console.log(message)};
        <button style={{ marginTop: "0.9rem" }} className="btn btn--secondary">
          {props.title}
        </button>
      </form>
    </div>
  );
}

AuthForm.propTypes = {
  isLogin: PropTypes.bool,
  title: PropTypes.string,
  fields: PropTypes.obj,
  spanText: PropTypes.string,
};
