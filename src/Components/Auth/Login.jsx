import React from "react";
import AuthForm from "./Auth";

import AuthField from "./AuthField";
const LoginFields = [
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Password",
  },
];

export default function Login(props) {
  return (
    <AuthForm
      link="/surveys"
      fields={LoginFields}
      isLogin={true}
      title="Login"
      spanText="Don't have an account? Sign Up"
    ></AuthForm>
  );
}
