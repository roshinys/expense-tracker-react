import React from "react";

const AuthContext = React.createContext({
  userId: "",
  token: "",
  isLoggedIn: null,
  emailVerified: false,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
