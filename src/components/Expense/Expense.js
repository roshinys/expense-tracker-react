import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth/auth-context";

function Expense() {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div>
      <Link to={`/user/edit/${authCtx.userId}`}>Update Profile</Link>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Expense;
