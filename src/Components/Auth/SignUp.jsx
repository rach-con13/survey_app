import React from "react";
import AuthForm from "./Auth";

import AuthField from "./AuthField";
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

export default function SignUp(props) {
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
