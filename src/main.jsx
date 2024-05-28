import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AuthProvider from "./providers/AuthProvider";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("https://coffee-store-server-alpha-jade.vercel.app/coffees"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://coffee-store-server-alpha-jade.vercel.app/coffees/${params.id}`),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("https://coffee-store-server-alpha-jade.vercel.app/users"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
