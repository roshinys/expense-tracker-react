import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth/auth-context";

function Expense() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Link to={`/user/edit/${authCtx.userId}`}>Update Profile</Link>{" "}
    </div>
  );
}

export default Expense;
