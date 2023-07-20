import React from "react";

function ExpenseItem(props) {
  return (
    <tr>
      <td>{props.expense.expense}</td>
      <td>{props.expense.description}</td>
      <td>{props.expense.category}</td>
    </tr>
  );
}

export default ExpenseItem;
