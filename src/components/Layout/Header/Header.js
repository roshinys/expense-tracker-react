import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-store";

function Header() {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={styles.header}>
      <div>
        <h3>Expense Tracker</h3>
      </div>
      <div className={styles.headerLinks}>
        <Link to={`/user/edit/${userId}`}>Update Profile</Link>
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </header>
  );
}

export default Header;
