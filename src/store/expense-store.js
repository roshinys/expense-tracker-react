import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    setExpense(state, action) {
      state.expenses = action.payload.expenses;
    },
    addExpense(state, action) {
      state.expenses = [...state.expenses, action.payload.newExpense];
    },
    editExpense(state, action) {
      state.expenses = state.expenses.filter((expense) => {
        return expense.id !== action.payload.expenseId;
      });
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
