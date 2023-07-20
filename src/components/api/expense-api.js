export const addExpense = async (expense) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_EXPENSEURL}/expenses.json`,
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error While Adding Expense");
    }
    const data = await response.json();
    if (!data || !data.name) {
      throw new Error("Something went wrong");
    }
    const expenseId = data.name;
    return expenseId;
  } catch (err) {
    alert(err);
  }
};

export const getExpense = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_EXPENSEURL}/expenses.json`
    );
    if (!response.ok) {
      throw new Error("Error While Fetching Expense");
    }
    const data = await response.json();
    const expenses = [];
    for (const key in data) {
      const expense = {
        id: key,
        expense: data[key].expense,
        description: data[key].description,
        category: data[key].category,
      };
      expenses.push(expense);
    }
    return expenses;
  } catch (err) {
    alert(err);
  }
};

export const deleteExpense = async (expenseId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_EXPENSEURL}/expenses/${expenseId}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application.json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error While Deleting Expense");
    }
    return;
  } catch (err) {
    alert(err);
  }
};
