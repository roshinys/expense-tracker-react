import React, { useCallback, useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";
import { getExpense, deleteExpense } from "../api/expense-api";

function Expense() {
  console.log("Expense");
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState({
    expense: "",
    description: "",
    category: "petrol",
  });
  const fetchExpenses = async () => {
    try {
      const fetchedExpenses = await getExpense();
      setExpenses(fetchedExpenses);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const editExpenseHandler = useCallback(
    (expenseId) => {
      console.log("edit expense");
      const expenseToEdit = expenses.find((exp) => exp.id === expenseId);
      setEditExpense(expenseToEdit);
      deleteExpenseHandler(expenseId);
    },
    [expenses]
  );

  const deleteExpenseHandler = async (expenseId) => {
    deleteExpense(expenseId);
    setExpenses((prevState) => {
      return prevState.filter((expense) => {
        return expense.id !== expenseId;
      });
    });
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="col">
          <ExpenseForm
            onAddExpense={addExpenseHandler}
            editExpense={editExpense}
          />
        </div>
        <div className="col">
          <ExpenseList
            expenses={expenses}
            onDelete={deleteExpenseHandler}
            onEdit={editExpenseHandler}
          />
        </div>
      </div>
    </>
  );
}

export default Expense;
