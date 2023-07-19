import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function RegisterForm() {
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  return (
    <div className="container">
      <AuthForm url={url} name="Sign Up" />
    </div>
  );
}

export default RegisterForm;
