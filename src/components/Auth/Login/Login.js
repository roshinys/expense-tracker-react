import React, { useContext } from "react";
import AuthForm from "../AuthForm/AuthForm";
import AuthContext from "../../../store/auth/auth-context";
import { useNavigate } from "react-router-dom";

function Login() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

  const loginHandler = (token) => {
    authCtx.login(token);
    navigate("/expense");
  };

  return (
    <div className="container">
      <AuthForm url={url} name="Sign In" login={true} onLogin={loginHandler} />
    </div>
  );
}

export default Login;
