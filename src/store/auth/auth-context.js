import React from "react";

const AuthContext = React.createContext({
  userId: "",
  token: "",
  isLoggedIn: null,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
