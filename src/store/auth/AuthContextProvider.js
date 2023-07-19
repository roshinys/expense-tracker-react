import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;

  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    const currentTime = Date.now();
    if (expirationTime <= currentTime) {
      logout();
    } else {
      setTimeout(() => {
        logout();
      }, expirationTime - currentTime);
    }
  }, []);

  const login = (tokenId) => {
    setToken(tokenId);
    localStorage.setItem("token", tokenId);
    const expirationTime = Date.now() + 25 * 60 * 1000;
    localStorage.setItem("expirationTime", expirationTime);
    setTimeout(() => {
      logout();
    }, 25 * 60 * 1000);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("email");
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
