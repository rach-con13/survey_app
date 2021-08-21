import React from "react";
import AuthForm from "./Auth";

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

export default function Login() {
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
