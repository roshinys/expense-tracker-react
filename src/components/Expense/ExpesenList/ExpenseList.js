import React from "react";

function ExpenseList(props) {
  return (
    <ul>
      {props.expenses.map((expense) => {
        return (
          <li>
            {expense.category} - {expense.description} - {expense.expense}
          </li>
        );
      })}
    </ul>
  );
}

export default ExpenseList;
