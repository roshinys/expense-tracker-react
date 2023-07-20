import React, { useCallback, useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";
import { getExpense } from "../api/expense-api";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    getExpense()
      .then((expenses) => {
        setExpenses(expenses);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  const addExpenseHandler = useCallback((newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  }, []);
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
