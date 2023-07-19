import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: null,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
