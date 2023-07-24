import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-store";
import expenseReducer from "./expense-store";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
  },
});

export default store;
