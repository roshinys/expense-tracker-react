import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import Button from "../../UI/Button/Button";

function ExpenseForm(props) {
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("petrol");

  const expenseChangeHandler = (value) => {
    setExpense(value);
  };
  const descriptionChangeHandler = (value) => {
    setDescription(value);
  };

  const categoryChangeHandler = (value) => {
    setCategory(value);
  };

  const addExpenseHandler = (e) => {
    e.preventDefault();
    if (
      parseInt(expense) > 0 &&
      description.length > 0 &&
      category.length > 0
    ) {
      const newExpense = {
        expense: parseInt(expense),
        description: description,
        category: category,
      };
      props.onAddExpense(newExpense);
    } else {
      alert("enter valid expense details");
    }
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <Input
        id="expense"
        type="number"
        placeholder="Expense"
        label="Expense"
        value={expense}
        onChange={expenseChangeHandler}
      />
      <Input
        id="description"
        type="text"
        placeholder="Description"
        label="Description"
        value={description}
        onChange={descriptionChangeHandler}
      />
      <Select
        id="category"
        label="Category"
        values={["petrol", "shop", "other"]}
        value={category}
        onChange={categoryChangeHandler}
      />
      <Button type="submit">Add Expense</Button>
    </form>
  );
}

export default ExpenseForm;
