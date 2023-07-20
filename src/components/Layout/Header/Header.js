import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import AuthContext from "../../../store/auth/auth-context";
import styles from "./Header.module.css";

function Header() {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header className={styles.header}>
      <div>
        <h3>Expense Tracker</h3>
      </div>
      <div className={styles.headerLinks}>
        <Link to={`/user/edit/${authCtx.userId}`}>Update Profile</Link>
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </header>
  );
}

export default Header;
