import React, { useState } from "react";
import Header from "../Layout/Header/Header";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpesenList/ExpenseList";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };
  return (
    <>
      <Header />
      <div>
        <ExpenseForm onAddExpense={addExpenseHandler} />
        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
}

export default Expense;
