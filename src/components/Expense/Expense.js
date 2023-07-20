import React, { useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";
import { getExpense, deleteExpense } from "../api/expense-api";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const fetchedExpenses = await getExpense();
      setExpenses(fetchedExpenses);
    } catch (err) {
      alert(err);
    }
  };

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const editExpenseHandler = (expenseId) => {
    const expenseToEdit = expenses.find((exp) => exp.id === expenseId);
    setEditExpense(expenseToEdit);
    deleteExpenseHandler(expenseId);
  };

  const deleteExpenseHandler = async (expenseId) => {
    await deleteExpense(expenseId);
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
            editExpense={
              editExpense
                ? editExpense
                : { expense: "", description: "", category: "petrol" }
            }
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
