import "./App.css";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Expense from "./components/Expense/Expense";
import { useContext } from "react";
import AuthContext from "./store/auth/auth-context";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/expense",
    element: (
      <RequireAuth redirectTo="/login">
        <Expense />
      </RequireAuth>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function RequireAuth(props) {
  const authCtx = useContext(AuthContext);
  return authCtx.isLoggedIn ? (
    props.children
  ) : (
    <Navigate to={props.redirectTo} />
  );
}

export default App;
