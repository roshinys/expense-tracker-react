import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./ExpensePremium.module.css";

function ExpensePremium() {
  return (
    <div className={styles.premFeature}>
      <Button>Buy Premium</Button>
    </div>
  );
}

export default ExpensePremium;
