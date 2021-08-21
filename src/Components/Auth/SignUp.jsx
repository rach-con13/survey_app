import React from "react";
import AuthForm from "./Auth";

const SignUpFields = [
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Password",
  },
];

export default function SignUp() {
  return (
    <AuthForm
      link="/login"
      fields={SignUpFields}
      isLogin={false}
      title="Sign Up"
      spanText="Already logged in"
    ></AuthForm>
  );
}
