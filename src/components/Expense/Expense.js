import React, { useState } from "react";
import Header from "../Layout/Header/Header";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };
  return (
    <>
      <Header />
      <div className="row">
        <div className="col">
          <ExpenseForm onAddExpense={addExpenseHandler} />
        </div>
        <div className="col">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default Expense;
