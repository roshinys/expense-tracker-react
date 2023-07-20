import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUserId = localStorage.getItem("userId");
  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);
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

  const login = (tokenId, uid) => {
    setToken(tokenId);
    setUserId(uid);
    localStorage.setItem("token", tokenId);
    localStorage.setItem("userId", uid);
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
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        token: token,
        isLoggedIn: isLoggedIn,
        emailVerified: true,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
